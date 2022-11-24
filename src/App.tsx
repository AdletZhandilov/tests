import React, { FC, useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #c1c1c1;
  /* border-radius: 8px; */
  width: 240px;
  padding: 8px;
  &:hover {
    background-color: #c1c1c1;
  }
`;
const Navbar = styled.div`
  height: 100%;
  position: fixed;
  left: 0;
  width: 240px;
`;

const App: FC = () => {
  const [data, setData] = useState([]);
  const [addBtn, setAddBtn] = useState(false);

  const getData = async () => {
    const res = await fetch("http://localhost:3050/dir");
    if (res.status === 200) {
      const data = await res.json();
      const mappedData = data.map((el: any) => ({
        ...el,
        open: false,
      }));
      setData(mappedData);
    } else {
      console.log("some error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const openModal = (id: string) => {
    setData((prevState: any) =>
      prevState.map((item: any) => ({
        ...item,
        open: id === item.id ? true : false,
      }))
    );
  };
  const closeModal = () => {
    setData((prevState: any) =>
      prevState.map((el: any) => ({
        ...el,
        open: false,
      }))
    );
    setAddBtn(false);
  };

  const postData = async (postInfo: any) => {
    const response = await fetch("http://localhost:3050/dir", {
      method: "POST", // *GET, POST, PUT, DELETE
      body: JSON.stringify(postInfo),
    });
    console.log(response);
  };

  const deleteData = async (id: string) => {
    const response = await fetch(`http://localhost:3050/dir/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE
    });
    console.log(response);
  };

  return (
    <div className="App">
      <Div>
        <Navbar>
          {data.map((el: any) => (
            <div key={el.id}>
              <Button onClick={() => openModal(el.id)}>{el.name}</Button>
              <Modal
                isOpen={el.open}
                values={el}
                closeModal={() => closeModal()}
                onDelete={() => deleteData(el.id)}
              />
            </div>
          ))}
          <Button onClick={() => setAddBtn(true)}>Add</Button>
          <Modal
            isOpen={addBtn}
            closeModal={() => closeModal()}
            onInputChange={(data) => console.log(data)}
          />
        </Navbar>
      </Div>
    </div>
  );
};

export default App;
