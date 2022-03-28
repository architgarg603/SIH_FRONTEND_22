import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import styles from "./institute_Row.module.scss";
import { useNavigate } from "react-router-dom";
function Institute_Row({ data}) {
  const navigate = useNavigate()
  return (
    <div>
      <Card className={styles.card}>
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Name</h6>}
          subheader={
            <h6 className={styles.main}>{data?.lab_name}</h6>
          }
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Address</h6>}
          subheader={<h6 className={styles.main}>{data?.lab_address}</h6>}
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Admin Name</h6>}
          subheader={<h6 className={styles.main}>{data?.lab_admin_name}</h6>}
        />
        <CardContent className={styles.btn} onClick={()=>navigate(`/lab/${data?.lab_id}`)}>View</CardContent>
      </Card>

    </div>
  );
}

export default Institute_Row;
