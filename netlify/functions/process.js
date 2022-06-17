/*
rawUrl: 'https://staging.ctownsend.me/.netlify/functions/process',
  rawQuery: '',
  path: '/.netlify/functions/process',
  httpMethod: 'POST',
  headers: {
    'X-Nf-Graph-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL25ldGxpZnkuY29tL2p3dC9jbGFpbXMiOnsic2l0ZV9pZCI6IjBlODlmYWQ4LTEyMWItNGY3Yy05ZmRmLTkxNjkyMGUwMzVkOSIsImF1dGhsaWZ5X3Rva2VuX2lkIjoiNDFmMjEwZjgtNTg4Mi00Yjk1LWI4NWEtYTlkNDJjOGQ1Yzg2In0sImV4cCI6MTY1NTQ4NTc1NiwiaWF0IjoxNjU1NDg0ODU2LCJpc3MiOiJuZXRsaWZ5Iiwic3ViIjoiMCJ9.a8kW6r1pXmpga2HQ4W1j5Wk5ZseyHU-51dBL5TdX0p4',
    'accept-encoding': 'gzip',
    'content-length': '1576',
    'content-type': 'application/json',
    host: 'staging.ctownsend.me',
    'user-agent': 'Go-http-client/2.0',
    'x-country': 'US',
    'x-forwarded-for': '54.145.223.101, 100.64.0.50',
    'x-forwarded-proto': 'https',
    'x-nf-client-connection-ip': '54.145.223.101',
    'x-nf-request-id': '01G5S9CEJGWMDEEC4HJEJ5YYXF'
  },
  multiValueHeaders: {
    'Accept-Encoding': [ 'gzip' ],
    'Content-Length': [ '1576' ],
    'Content-Type': [ 'application/json' ],
    'User-Agent': [ 'Go-http-client/2.0' ],
    'X-Country': [ 'US' ],
    'X-Forwarded-For': [ '54.145.223.101, 100.64.0.50' ],
    'X-Forwarded-Proto': [ 'https' ],
    'X-Nf-Client-Connection-Ip': [ '54.145.223.101' ],
    'X-Nf-Request-Id': [ '01G5S9CEJGWMDEEC4HJEJ5YYXF' ],
    host: [ 'staging.ctownsend.me' ]
  },
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  body: '{"hook":{"id":1142153,"project_id":152930,"project_pub_key":"774493568ed46f71eae9","target":"https://staging.ctownsend.me/.netlify/functions/process","event":"file.uploaded","is_active":true,"version":"0.6","created_at":"2022-06-17T15:36:40.878997Z","updated_at":"2022-06-17T15:37:03.054736Z"},"data":{"uuid":"7bc44eaa-a4f4-405e-8561-7bd67d090bcf","image_info":null,"is_image":false,"is_ready":true,"mime_type":"video/mp4","original_filename":"Blender_ [C__Users_Christian_The Collected Works Dropbox_Christian Townsend_01 - Remote Studio_Explorest_01 - Explorest Identity_03_D\\u0026AD_02 - Sketches_Christian_Blender_Type On Path1.blend] 2022-06-17 12-46-38.mp4","original_file_url":"https://ucarecdn.com/7bc44eaa-a4f4-405e-8561-7bd67d090bcf/Blender_C__Users_Christian_TheCollectedWorksDropbox_ChristianTownsend_01RemoteStudio_Explorest_01ExplorestIdentity_03_DAD_02Sketches_Christian_Blender_TypeOnPath1blend20220617124638.mp4","datetime_removed":null,"size":10415750,"datetime_stored":"2022-06-17T16:54:16.791429Z","url":"https://api.uploadcare.com/files/7bc44eaa-a4f4-405e-8561-7bd67d090bcf/","datetime_uploaded":"2022-06-17T16:54:16.36334Z","variations":null,"video_info":{"duration":22299,"format":"mp4","bitrate":3737,"audio":null,"video":{"height":1080,"width":1920,"frame_rate":36,"bitrate":3357,"codec":"h264"}}},"file":"https://ucarecdn.com/7bc44eaa-a4f4-405e-8561-7bd67d090bcf/Blender_C__Users_Christian_TheCollectedWorksDropbox_ChristianTownsend_01RemoteStudio_Explorest_01ExplorestIdentity_03_DAD_02Sketches_Christian_Blender_TypeOnPath1blend20220617124638.mp4"}',
  isBase64Encoded: false,
  authlifyToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL25ldGxpZnkuY29tL2p3dC9jbGFpbXMiOnsic2l0ZV9pZCI6IjBlODlmYWQ4LTEyMWItNGY3Yy05ZmRmLTkxNjkyMGUwMzVkOSIsImF1dGhsaWZ5X3Rva2VuX2lkIjoiNDFmMjEwZjgtNTg4Mi00Yjk1LWI4NWEtYTlkNDJjOGQ1Yzg2In0sImV4cCI6MTY1NTQ4NTc1NiwiaWF0IjoxNjU1NDg0ODU2LCJpc3MiOiJuZXRsaWZ5Iiwic3ViIjoiMCJ9.a8kW6r1pXmpga2HQ4W1j5Wk5ZseyHU-51dBL5TdX0p4',
  netlifyGraphToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL25ldGxpZnkuY29tL2p3dC9jbGFpbXMiOnsic2l0ZV9pZCI6IjBlODlmYWQ4LTEyMWItNGY3Yy05ZmRmLTkxNjkyMGUwMzVkOSIsImF1dGhsaWZ5X3Rva2VuX2lkIjoiNDFmMjEwZjgtNTg4Mi00Yjk1LWI4NWEtYTlkNDJjOGQ1Yzg2In0sImV4cCI6MTY1NTQ4NTc1NiwiaWF0IjoxNjU1NDg0ODU2LCJpc3MiOiJuZXRsaWZ5Iiwic3ViIjoiMCJ9.a8kW6r1pXmpga2HQ4W1j5Wk5ZseyHU-51dBL5TdX0p4'
}

{
  "hook": {
    "id": 1142153,
    "project_id": 152930,
    "project_pub_key": "774493568ed46f71eae9",
    "target": "https://staging.ctownsend.me/.netlify/functions/process",
    "event": "file.uploaded",
    "is_active": true,
    "version": "0.6",
    "created_at": "2022-06-17T15:36:40.878997Z",
    "updated_at": "2022-06-17T15:37:03.054736Z"
  },
  "data": {
    "uuid": "7bc44eaa-a4f4-405e-8561-7bd67d090bcf",
    "image_info": null,
    "is_image": false,
    "is_ready": true,
    "mime_type": "video/mp4",
    "original_filename": "Blender_ [C__Users_Christian_The Collected Works Dropbox_Christian Townsend_01 - Remote Studio_Explorest_01 - Explorest Identity_03_D\\u0026AD_02 - Sketches_Christian_Blender_Type On Path1.blend] 2022-06-17 12-46-38.mp4",
    "original_file_url": "https://ucarecdn.com/7bc44eaa-a4f4-405e-8561-7bd67d090bcf/Blender_C__Users_Christian_TheCollectedWorksDropbox_ChristianTownsend_01RemoteStudio_Explorest_01ExplorestIdentity_03_DAD_02Sketches_Christian_Blender_TypeOnPath1blend20220617124638.mp4",
    "datetime_removed": null,
    "size": 10415750,
    "datetime_stored": "2022-06-17T16:54:16.791429Z",
    "url": "https://api.uploadcare.com/files/7bc44eaa-a4f4-405e-8561-7bd67d090bcf/",
    "datetime_uploaded": "2022-06-17T16:54:16.36334Z",
    "variations": null,
    "video_info": {
      "duration": 22299,
      "format": "mp4",
      "bitrate": 3737,
      "audio": null,
      "video": {
        "height": 1080,
        "width": 1920,
        "frame_rate": 36,
        "bitrate": 3357,
        "codec": "h264"
      }
    }
  },
  "file": "https://ucarecdn.com/7bc44eaa-a4f4-405e-8561-7bd67d090bcf/Blender_C__Users_Christian_TheCollectedWorksDropbox_ChristianTownsend_01RemoteStudio_Explorest_01ExplorestIdentity_03_DAD_02Sketches_Christian_Blender_TypeOnPath1blend20220617124638.mp4"
}
*/

// import fetch from 'node-fetch'

const fetch = require("node-fetch")
const dotenv = require("dotenv")
dotenv.config()

const API_ENDPOINT = "https://api.uploadcare.com/convert/video/";

exports.handler = async (event, context) => {

    const params = event.body ? JSON.parse(event.body) : undefined
    
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    if (!params.data.mime_type.startsWith('video/')) {
        return { statusCode: 405, body: "Not video" };
    }
    
    const uuid = params.data.uuid
    
    // Send greeting to Slack
    return fetch(API_ENDPOINT, {
        method: "POST",
        withCredentials: true,
        // credentials: 'include',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/vnd.uploadcare-v0.6+json",
            // "Authorization": `Uploadcare.Simple ${process.env.PUBLIC_KEY}:${process.env.SECRET_KEY}`,
            "Authorization": "Uploadcare.Simple " + Buffer.from(process.env.PUBLIC_KEY + ":" + process.env.SECRET_KEY).toString('base64')
        },
        body: JSON.stringify({
                paths: [
                    `${uuid}/video/-/quality/lighter/-/format/mp4/-/size/1920x1080/-/format/mp4/`,
                    `${uuid}/video/-/quality/lighter/-/format/mp4/-/size/1920x1080/-/format/webm/`
                ],
                store: '1'
            }),
    })
    .then(() => ({
        statusCode: 200,
        body: `Sent process request to UploadCare`,
    }))
    .catch((error) => ({
        statusCode: 422,
        body: `Oops! Something went wrong. ${error}`,
    }));
};