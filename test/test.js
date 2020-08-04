const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = 'localhost:8980';
const expect = chai.expect;
describe('Property: testData', () => {
    describe('Get test Data', () => {
        it('Get Data', done => {
            // Send some Form Data
            chai.request(app)
                .get('/wot-test-bench/properties/testData')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});
describe('Action: fastTest', () => {
    describe('Test entire system', () => {
        it('Fast Test', done => {
            // Send some Form Data
            chai.request(app)
                .post('/wot-test-bench/actions/fastTest')
                .send({
                    title: 'TestServient',
                    description:
                        'Test servient that can be used as a servient to be tested with the WoT Test Bench',
                    '@context': 'https://www.w3.org/2019/wot/td/v1',
                    '@type': 'Thing',
                    security: ['nosec_sc'],
                    properties: {
                        display: {
                            type: 'string',
                            writable: true,
                            observable: true,
                            readOnly: false,
                            writeOnly: false,
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/properties/display',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://localhost:8081/TestServient/properties/display/observable',
                                    contentType: 'application/json',
                                    op: ['observeproperty'],
                                    subprotocol: 'longpoll',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/display',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/display/observable',
                                    contentType: 'application/json',
                                    op: ['observeproperty'],
                                    subprotocol: 'longpoll',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/display',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/display/observable',
                                    contentType: 'application/json',
                                    op: ['observeproperty'],
                                    subprotocol: 'longpoll',
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/pr/display',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/display',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/display',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                            ],
                        },
                        counter: {
                            type: 'number',
                            writable: true,
                            observable: true,
                            readOnly: false,
                            writeOnly: false,
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/properties/counter',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://localhost:8081/TestServient/properties/counter/observable',
                                    contentType: 'application/json',
                                    op: ['observeproperty'],
                                    subprotocol: 'longpoll',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/counter',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/counter/observable',
                                    contentType: 'application/json',
                                    op: ['observeproperty'],
                                    subprotocol: 'longpoll',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/counter',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/counter/observable',
                                    contentType: 'application/json',
                                    op: ['observeproperty'],
                                    subprotocol: 'longpoll',
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/pr/counter',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/counter',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/counter',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                            ],
                        },
                        temperature: {
                            type: 'number',
                            writable: false,
                            observable: true,
                            readOnly: false,
                            writeOnly: false,
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/properties/temperature',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://localhost:8081/TestServient/properties/temperature/observable',
                                    contentType: 'application/json',
                                    op: ['observeproperty'],
                                    subprotocol: 'longpoll',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/temperature',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/temperature/observable',
                                    contentType: 'application/json',
                                    op: ['observeproperty'],
                                    subprotocol: 'longpoll',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/temperature',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/temperature/observable',
                                    contentType: 'application/json',
                                    op: ['observeproperty'],
                                    subprotocol: 'longpoll',
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/pr/temperature',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/temperature',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/temperature',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                            ],
                        },
                        testObject: {
                            type: 'object',
                            properties: {
                                brightness: {
                                    type: 'number',
                                    minimum: 0,
                                    maximum: 100,
                                },
                                status: {type: 'string'},
                            },
                            writable: true,
                            readOnly: false,
                            writeOnly: false,
                            observable: false,
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/properties/testObject',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/testObject',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/testObject',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/pr/testObject',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/testObject',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/testObject',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                            ],
                        },
                        testArray: {
                            type: 'array',
                            items: {type: 'number'},
                            writable: true,
                            readOnly: false,
                            writeOnly: false,
                            observable: false,
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/properties/testArray',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/testArray',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/properties/testArray',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/pr/testArray',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/testArray',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/pr/testArray',
                                    contentType: 'application/json',
                                    op: ['readproperty', 'writeproperty'],
                                },
                            ],
                        },
                    },
                    actions: {
                        setCounter: {
                            input: {type: 'number'},
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/actions/setCounter',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/setCounter',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/setCounter',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/ac/setCounter',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/setCounter',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/setCounter',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                            ],
                            idempotent: false,
                            safe: false,
                        },
                        getTemperature: {
                            output: {type: 'number'},
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/actions/getTemperature',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/getTemperature',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/getTemperature',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/ac/getTemperature',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/getTemperature',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/getTemperature',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                            ],
                            idempotent: false,
                            safe: false,
                        },
                        setDisplay: {
                            input: {type: 'string'},
                            output: {type: 'string'},
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/actions/setDisplay',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/setDisplay',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/setDisplay',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/ac/setDisplay',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/setDisplay',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/setDisplay',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                            ],
                            idempotent: false,
                            safe: false,
                        },
                        setTestObject: {
                            input: {
                                type: 'object',
                                properties: {
                                    brightness: {
                                        type: 'number',
                                        minimum: 0,
                                        maximum: 100,
                                    },
                                    status: {type: 'string'},
                                },
                            },
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/actions/setTestObject',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/setTestObject',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/setTestObject',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/ac/setTestObject',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/setTestObject',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/setTestObject',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                            ],
                            idempotent: false,
                            safe: false,
                        },
                        setTestArray: {
                            input: {type: 'array', items: {type: 'number'}},
                            output: {type: 'array', items: {type: 'number'}},
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/actions/setTestArray',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/setTestArray',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/actions/setTestArray',
                                    contentType: 'application/json',
                                    op: ['invokeaction'],
                                    'htv:methodName': 'POST',
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/ac/setTestArray',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/setTestArray',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ac/setTestArray',
                                    contentType: 'application/json',
                                    op: 'invokeaction',
                                },
                            ],
                            idempotent: false,
                            safe: false,
                        },
                    },
                    events: {
                        onChange: {
                            type: 'number',
                            forms: [
                                {
                                    href:
                                        'http://localhost:8081/TestServient/events/onChange',
                                    contentType: 'application/json',
                                    subprotocol: 'longpoll',
                                    op: ['subscribeevent'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/events/onChange',
                                    contentType: 'application/json',
                                    subprotocol: 'longpoll',
                                    op: ['subscribeevent'],
                                },
                                {
                                    href:
                                        'http://[localhost]:8081/TestServient/events/onChange',
                                    contentType: 'application/json',
                                    subprotocol: 'longpoll',
                                    op: ['subscribeevent'],
                                },
                                {
                                    href:
                                        'coap://localhost:8082/TestServient/ev/onChange',
                                    contentType: 'application/json',
                                    op: 'subscribeevent',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ev/onChange',
                                    contentType: 'application/json',
                                    op: 'subscribeevent',
                                },
                                {
                                    href:
                                        'coap://[localhost]:8082/TestServient/ev/onChange',
                                    contentType: 'application/json',
                                    op: 'subscribeevent',
                                },
                            ],
                        },
                    },
                    id: 'urn:uuid:4d856a78-a2ff-4dff-90c2-af42afce13e0',
                    forms: [
                        {
                            href:
                                'http://localhost:8081/TestServient/all/properties',
                            contentType: 'application/json',
                            op: [
                                'readallproperties',
                                'readmultipleproperties',
                                'writeallproperties',
                                'writemultipleproperties',
                            ],
                        },
                        {
                            href:
                                'http://[localhost]:8081/TestServient/all/properties',
                            contentType: 'application/json',
                            op: [
                                'readallproperties',
                                'readmultipleproperties',
                                'writeallproperties',
                                'writemultipleproperties',
                            ],
                        },
                        {
                            href:
                                'http://[localhost]:8081/TestServient/all/properties',
                            contentType: 'application/json',
                            op: [
                                'readallproperties',
                                'readmultipleproperties',
                                'writeallproperties',
                                'writemultipleproperties',
                            ],
                        },
                    ],
                    securityDefinitions: {nosec_sc: {scheme: 'nosec'}},
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    done();
                });
        });
    });
});
