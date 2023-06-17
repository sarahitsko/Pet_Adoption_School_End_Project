import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import User from "./User";

function UserList({ userList }) {
  return (
    <Container>
      <Row>
        {userList.map((user) => (
          <Col key={user.id} md={3}>
            <User user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserList;
