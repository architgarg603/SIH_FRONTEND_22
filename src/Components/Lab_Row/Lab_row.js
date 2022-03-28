import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import styles from "./Lab_row.module.scss";
function Lab_row({ data, idx, onRemoveHandler, slots }) {
  const [color, setColor] = useState(styles.btn);
  const [select, setSelected] = useState("Select");

  function changeColor() {
    setColor(styles.btn_green);
    setSelected("Selected");
  }
  return (
    <div>
      <Card className={styles.card}>
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Name</h6>}
          subheader={<h6 className={styles.main}>{data[0]}</h6>}
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Description</h6>}
          subheader={<h6 className={styles.main}>{data[1]}</h6>}
        />
        {slots ? (
          <>
            <CardContent className={color} onClick={changeColor}>
              {select}
            </CardContent>
          </>
        ) : (
          <CardContent
            className={styles.btn}
            onClick={() => onRemoveHandler(idx)}
          >
            Remove
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default Lab_row;
