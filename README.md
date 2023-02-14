# GoogleGPT
Just a webpage like Google Search, but with API calls to 'text-davinci-003' ( aka ChatGPT )


https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-client-credentials-flow

sample token
AUTHTOKEN = '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'
AUTHTYPE = 'Bearer'
APIURL = 'https://api.openai.com/v1/completions'
BODY = {"model": "text-davinci-003", "prompt": x, "max_tokens": 1000}