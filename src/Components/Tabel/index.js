import React from "react";
import styles from "./Table.module.scss";
const Table = ({ data, columns }) => {
  const getCaps = (str) => {
    return str.toUpperCase();
  };

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head) => (
                <th>{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((col) => (
                <td>{row[col.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
