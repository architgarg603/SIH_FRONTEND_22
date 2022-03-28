import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import styles from "./Lab_row.module.scss";
function Lab_row({ data, idx, onRemoveHandler }) {
  return (
    <div>
      <Card className={styles.card}>
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Name</h6>}
          subheader={
            <h6 className={styles.main}>{data[0]}</h6>
          }
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Description</h6>}
          subheader={<h6 className={styles.main}>{data[1]}</h6>}
        />
        <CardContent className={styles.btn} onClick={() => onRemoveHandler(idx)}>Remove</CardContent>
      </Card>

    </div>
  );
}

export default Lab_row;
