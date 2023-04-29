function submitToAPI(e) {
    let d = new Date();
    alert("Today's date is " + d);
    window.location = './confirmation.html'

}

{
    'resource': '/contact',
        'path': '/contact',
            'httpMethod': 'POST',
                'headers': None,
                    'multiValueHeaders': None,
                        'queryStringParameters': None,
                            'multiValueQueryStringParameters': None,
                                'pathParameters': None, 'stageVariables': None,
                                    'requestContext':
    {
        'resourceId': 'f2k1x8',
            'resourcePath': '/contact',
                'httpMethod': 'POST',
                    'extendedRequestId': 'EI6nxFM2FiAFRVg=', 'requestTime': '29/Apr/2023:12:18:06 +0000',
                        'path': '/contact', 'accountId': '039735417706',
                            'protocol': 'HTTP/1.1', 'stage': 'test-invoke-stage',
                                'domainPrefix': 'testPrefix', 'requestTimeEpoch': 1682770686241, 'requestId': 'd6821fbf-7bfe-44ce-a0c2-356903a1659c',
                                    'identity':
        {
            'cognitoIdentityPoolId': None, 'cognitoIdentityId': None, 'apiKey': 'test-invoke-api-key',
                'principalOrgId': None, 'cognitoAuthenticationType': None,
                    'userArn': 'arn:aws:iam::039735417706:user/wolfgang.unger@sccbrasil.com',
                        'apiKeyId': 'test-invoke-api-key-id',
                            'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
                                'accountId': '039735417706',
                                    'caller': 'AIDAQSQDKLNVNIKOOMRBB',
                                        'sourceIp': 'test-invoke-source-ip', 'accessKey': 'ASIAQSQDKLNVFIQVXZAH',
                                            'cognitoAuthenticationProvider': None, 'user': 'AIDAQSQDKLNVNIKOOMRBB'
        },
        'domainName': 'testPrefix.testDomainName', 'apiId': 'a0k2pjfioa'
    },
    'body': '{\n  "name": "sepp",\n  "phone": "47 890920390329",\n  "email": "sepp@gmail.com",\n  "desc": "hallo dudes"\n}', 'isBase64Encoded': False
}