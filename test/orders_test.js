const assert = require('chai').assert
const expect = require('chai').expect;
const should = require('chai').should;
// const app = require('../../app');
const supertest = require('supertest');
const server = supertest('http://localhost:3000');

describe('orders API Test', () => {
    let date = new Date().toISOString().slice(0, 10).split('-').join('/'),
        orderId = '003';

    it('create order test', done => {
        server.post('/orders/create')
            .set('Accept', 'application/json')
            // .set('Authorization',jwt)
            .send({
                order_id: orderId,
                item_name: 'test item03',
                cost: 100,
                order_date: date,
                delivery_date: date,
                createdAt: new Date()
            })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(
                (err, res) => {
                    if (err) return done(err)
                    expect(res.body).to.be.an('object').to.have.property('order_id')
                    expect(res.body.order_id).to.be.eql(orderId)
                    done()
                }
            )
    });

    it('update order test', done => {
        server.put('/orders/update/' + orderId)
            .set('Accept', 'application/json')
            // .set('Authorization',jwt)
            .send({
                item_name: 'test item01 updated',
                cost: 500
            })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(
                (err, res) => {
                    if (err) return done(err)
                    expect(res.body).to.be.an('object').to.have.property('modifiedCount')
                    expect(res.body.modifiedCount).to.be.eql(1)
                    done()
                }
            )
    });

    it('get order test', done => {
        server.get('/orders/search/' + orderId)
            .set('Accept', 'application/json')
            // .set('Authorization',jwt)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(
                (err, res) => {
                    if (err) return done(err);
                    expect(res.body[0]).to.be.an('object').to.have.property('order_id');
                    done()
                }
            )
    });

    it('get orders by date test', done => {
        server.post('/orders/list')
            .set('Accept', 'application/json')
            // .set('Authorization',jwt)
            .send({ date })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(
                (err, res) => {
                    if (err) return done(err);
                    expect(res.body).to.be.an('array')
                    // expect(res.body[0]).to.be.an('object').to.have.property('order_id');
                    done()
                }
            )
    });

    it('delete order test', done => {
        server.delete('/orders/delete/' + orderId)
            .set('Accept', 'application/json')
            // .set('Authorization',jwt)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(
                (err, res) => {
                    if (err) return done(err);
                    expect(res.body).to.be.an('object').to.have.property('deletedCount')
                    expect(res.body.deletedCount).to.be.eql(1)
                    done()
                }
            )
    });

});