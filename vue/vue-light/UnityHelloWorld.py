# for python 2.x, import httplib and urlparse instead of http.client and urllib.parse
import json
import http.client
import urllib.parse
import sys

# change these to your server and credentials
Url = 'http://twlatestga.unitysandbox.com/unity/unityservice.svc'

# Replace "web20" with your Unity application name
Appname      = 'MemorialMedicalCenter.PHEnOM.TestApp'

# Replace the following with your Unity service credentials
Svc_username = 'Memor-6aa2-PHEnOM-test'
Svc_password = 'M%7!rf@cm0d7C@8C%nT4rPh6N!fT%s'

# valid EHR username, used along with token in each Magic call
# (see Sandboxes page of developer portal for current values)
Ehr_username = 'jmedici'
Ehr_password = 'password01'

# *******************************************************************************************************
# * NAME:        UnityHelloWorld.py
# *
# * DESCRIPTION: Example Python application code to illustrate basic usage of Unity with Allscripts
# *              TouchWorks/Professional EHR.
# *
# * Unpublished (c) 2015 Allscripts Healthcare Solutions, Inc. and/or its affiliates. All Rights Reserved.
# *
# * This software has been provided pursuant to a License Agreement, with Allscripts Healthcare Solutions,
# * Inc. and/or its affiliates, containing restrictions on its use. This software contains valuable trade
# * secrets and proprietary information of Allscripts Healthcare Solutions, Inc. and/or its affiliates
# * and is protected by trade secret and copyright law. This software may not be copied or distributed
# * in any form or medium, disclosed to any third parties, or used in any manner not provided for in
# * said License Agreement except with prior written authorization from Allscripts Healthcare Solutions,
# * Inc. and/or its affiliates. Notice to U.S. Government Users: This software is "Commercial Computer
# * Software."
# *
# * This is example code, not meant for production use.
# *******************************************************************************************************


# build Magic action JSON string
def buildjson(action, appname, unitytoken, ehruserid='', patientid='',
              param1='', param2='', param3='', param4='', param5='', param6='', data=''):
    return json.dumps({'Action': action,
                       'Appname': appname,
                       'AppUserID': ehruserid,
                       'PatientID': patientid,
                       'Token': unitytoken,
                       'Parameter1': param1, 'Parameter2': param2, 'Parameter3': param3,
                       'Parameter4': param4, 'Parameter5': param5, 'Parameter6': param6,
                       'Data': data})

# post action JSON to MagicJson endpoint, get JSON in return
def unityaction(jsonstr):
    u = urllib.parse.urlparse(Url)
    if (u.scheme == 'http'):
        conn = http.client.HTTPConnection(u.hostname)
    elif (u.scheme == 'https'):
        conn = http.client.HTTPSConnection(u.hostname)

    conn.request('POST', '/Unity/UnityService.svc/json/MagicJson',
             jsonstr,
             {'Content-Type': 'application/json'})

    resp = conn.getresponse( )
    retjson = resp.read( ).decode( )
    conn.close( )
    return retjson

# get Unity security token from GetToken endpoint
def gettoken(username, password):
    u = urllib.parse.urlparse(Url)

    if (u.scheme == 'http'):
        conn = http.client.HTTPConnection(u.hostname)
    elif (u.scheme == 'https'):
        conn = http.client.HTTPSConnection(u.hostname)

    conn.request('POST', '/Unity/UnityService.svc/json/GetToken',
             json.dumps({'Username': username, 'Password': password}),
             {'Content-Type': 'application/json'})
    response = conn.getresponse( )
    t = response.read( ).decode( )
    conn.close( )
    return t

# Get Unity security token
token = gettoken(Svc_username, Svc_password)
print('Using Unity security token: ' + token)

# Authenticate EHR user before calling other Magic actions
jsonstr = buildjson('GetUserAuthentication', Appname, token, Ehr_username, '', Ehr_password)
unity_output = unityaction(jsonstr)

# Uncomment to display full GetUserAuthentication output
#print('Output from GetUserAuthentication: ')
# print(json.dumps(json.loads(unity_output), indent=4, separators=(',', ': ')))
# print( )

# Look for ValidUser = YES
json_dict = json.loads(unity_output)
valid_user = json_dict[0]['getuserauthenticationinfo'][0]['ValidUser']
if (valid_user == 'YES'):
	print('EHR user is valid.')
else:
	print('EHR user is invalid: ' + json_dict[0]['getuserauthenticationinfo'][0]['ErrorMessage'])

print( )

# Call GetServerInfo Magic action; patient ID, Parameter1-6, and data not used
jsonstr = buildjson('GetServerInfo', Appname, token, Ehr_username, '')
print("Get Server info", jsonstr)
unity_output = unityaction(jsonstr)

print('Output from GetServerInfo: ')
print(json.dumps(json.loads(unity_output), indent=4, separators=(',', ': ')))

# Call GetPatient Magic action; Parameter1-6 and data not used in this example
# patient = input('Enter a Patient ID to display (e.g., 324): ')
# if patient.strip( ) == '':
#     print('No patient ID specified; exiting.')
#     sys.exit(0)
# jsonstr = buildjson('GetPatient', Appname, token, Ehr_username, "10530")
jsonstr = buildjson('SearchPatients', Appname, token, Ehr_username, '', 'Smith, Will')
# print(jsonstr)
unity_output = unityaction(jsonstr)

# print(unity_output)
print('Output from GetPatient: ')
print(json.dumps(json.loads(unity_output), indent=4, separators=(',', ': ')))

# retire the stupid token...
# jsonstr = buildjson('RetireToken', Appname, token)
# unity_output = unityaction(jsonstr)
#
# print('Output from RetireToken')
# print(json.dumps(json.loads(unity_output), indent=4, separators=(',', ': ')))

# "170621013124407" <- Will Smith
