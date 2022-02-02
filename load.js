// Creator: k6 Browser Recorder 0.6.0

import { sleep, group, check } from 'k6'
import http from 'k6/http'

export const options = { vus: 10, iterations: '10' }

export default function main() {
  let target=`${__ENV.TARGET}`
  let response

  group('page_1 - http://$target/', function () {
    response = http.get(`http://${target}`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`http://${target}/api/ihop`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`http://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`http://${target}/api/chipotle`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`http://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`http://${target}/api/bucadibeppo`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`http://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`http://${target}/api/outback`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`http://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`http://${target}/api/outback`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`http://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`http://${target}/api/outback`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`http://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`http://${target}/api/outback`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`http://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    sleep(0.5)
    response = http.get(`http://${target}/api/chipotle`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
    response = http.get(`http://${target}/api/getvotes`, {
      headers: {
        host: `${target}`,
        accept: 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.5',
        'accept-encoding': 'gzip, deflate',
        dnt: '1',
        connection: 'keep-alive',
        'sec-gpc': '1',
      },
    })
    check(response, { 'status equals 200': response => response.status.toString() === '200' })
  })
}
