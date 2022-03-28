import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import styles from "./student_Row.module.scss";
function Student_Row({ data}) {
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
          title={<h6 className={styles.card_text}>Location</h6>}
          subheader={<h6 className={styles.main}>{data[1]}</h6>}
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Contact</h6>}
          subheader={<h6 className={styles.main}>{data[2]}</h6>}
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Status</h6>}
          subheader={<CardContent className={styles.btn}>View</CardContent>}
        />
        
      </Card>

    </div>
  );
}

export default Student_Row;
