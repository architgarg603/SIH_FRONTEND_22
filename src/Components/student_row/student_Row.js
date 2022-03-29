import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import styles from "./student_Row.module.scss";
import { labIds } from "../../Services/LabServices";
function Student_Row({ data }) {
  const [lab, setLab] = useState({})
  const getLabInfo = async ()=>{
    let labInfo= await labIds({id:data.lab_id})
    setLab(labInfo);
    console.log(labInfo, lab,data)
  }
  useEffect(() => {
    getLabInfo();
  }, [])

  return (
    <div>
      <Card className={styles.card}>
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Name</h6>}
          subheader={
            <h6 className={styles.main}>{lab?.lab_name}</h6>
          }
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Location</h6>}
          subheader={<h6 className={styles.main}>{lab?.lab_address}</h6>}
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Start Time</h6>}
          subheader={<h6 className={styles.main}>{data?.start_time.split(":")[0]+':'+data?.start_time.split(":")[1]}</h6>}
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>End Time</h6>}
          subheader={<h6 className={styles.main}>{data?.end_time.split(":")[0]+':'+data?.end_time.split(":")[1]}</h6>}
        />
        <CardHeader
          className={styles.section}
          title={<h6 className={styles.card_text}>Status</h6>}
          subheader={<CardContent className={styles.btn}>Paid</CardContent>}
        />

      </Card>

    </div>
  );
}

export default Student_Row;
