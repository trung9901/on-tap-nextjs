/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from 'reactstrap';
import useProducts from '../../hook/use-product';
type Props = {};

const ProductPage = (props: Props) => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalNotificationOpen, setModalNotificationOpen] =
    React.useState(false);
  const [modalFormOpen, setModalFormOpen] = React.useState(false);

  const { data: products, error, create, remove, update } = useProducts();
  if (error) return <div className="">failed to load</div>;
  if (!products) return <div className="">loading...</div>;
  // console.log(products);

  return (
    <div>
      <div className="">
        {products?.map((item: any) => (
          // eslint-disable-next-line react/jsx-key
          <div className="" key={item.id}>
            <div className="">
              <Link href={`/products/${item.id}`}>{item.name}</Link>
            </div>
            <div className="">
              <button
                onClick={() => {
                  remove(item.id);
                }}
              >
                Delete
              </button>
            </div>
            <div className="">
              <button
                onClick={() => {
                  update(item.id, { name: 'productUpdate' });
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
        <div className="">
          <button
            onClick={() => {
              create({ name: 'newProducts' });
            }}
          >
            create
          </button>
        </div>
        <div className="">
          <Row>
            <Col md="4">
              <Button
                block
                className=" mb-3"
                color="primary"
                onClick={() => setModalDefaultOpen(true)}
                type="button"
              >
                Default
              </Button>
              <Modal
                isOpen={modalDefaultOpen}
                toggle={() => setModalDefaultOpen(false)}
              >
                <div className=" modal-header">
                  <h6 className=" modal-title" id="modal-title-default">
                    Type your modal title
                  </h6>
                  <button
                    aria-label="Close"
                    className=" close"
                    onClick={() => setModalDefaultOpen(false)}
                    type="button"
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className=" modal-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
                <div className=" modal-footer">
                  <Button color="primary" type="button">
                    Save changes
                  </Button>
                  <Button
                    className=" ml-auto"
                    color="link"
                    onClick={() => setModalDefaultOpen(false)}
                    type="button"
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </Col>
            <Col md="4">
              <Button
                block
                className=" mb-3"
                color="warning"
                onClick={() => setModalNotificationOpen(true)}
                type="button"
              >
                Notification
              </Button>
              <Modal
                isOpen={modalNotificationOpen}
                className="modal-danger"
                contentClassName="bg-gradient-danger"
                onClick={() => setModalNotificationOpen(false)}
              >
                <div className=" modal-header">
                  <h6 className=" modal-title" id="modal-title-notification">
                    Your attention is required
                  </h6>
                  <button
                    aria-label="Close"
                    className=" close"
                    onClick={() => setModalNotificationOpen(false)}
                    type="button"
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className=" modal-body">
                  <div className=" py-3 text-center">
                    <i className=" ni ni-bell-55 ni-3x"></i>
                    <h4 className=" heading mt-4">You should read this!</h4>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
                <div className=" modal-footer">
                  <Button className=" btn-white" color="default" type="button">
                    Ok, Got it
                  </Button>
                  <Button
                    className=" text-white ml-auto"
                    color="link"
                    onClick={() => setModalNotificationOpen(false)}
                    type="button"
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </Col>
            <Col md="4">
              <Button
                block
                color="default"
                onClick={() => setModalFormOpen(true)}
                type="button"
              >
                Form
              </Button>
              <Modal
                isOpen={modalFormOpen}
                toggle={() => setModalFormOpen(false)}
              >
                <div className=" modal-body p-0">
                  <Card className=" bg-secondary shadow border-0">
                    <CardHeader className=" bg-white pb-5">
                      <div className=" text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className=" btn-wrapper text-center">
                        <Button
                          className=" btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className=" btn-inner--icon"></span>
                          <span className=" btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className=" btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className=" btn-inner--icon"></span>
                          <span className=" btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className=" px-lg-5 py-lg-5">
                      <div className=" text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role="form">
                        <FormGroup className=" mb-3">
                          <InputGroup className=" input-group-alternative">
                            <Input placeholder="Email" type="email"></Input>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className=" input-group-alternative">
                            <Input
                              placeholder="Password"
                              type="password"
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                        <div className=" custom-control custom-control-alternative custom-checkbox">
                          <input
                            className=" custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          ></input>
                          <label
                            className=" custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className=" text-center">
                          <Button
                            className=" my-4"
                            color="primary"
                            type="button"
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Modal>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
