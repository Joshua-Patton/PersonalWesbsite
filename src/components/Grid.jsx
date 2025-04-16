import React from 'react';
import styles from '/src/styles/components/Grid.module.css';

const Grid = ({ rows, columns, bgSrc}) => {
  const gridStyle = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };
  const gridItems = Array.from({ length: rows * columns }, (_, index) => {
    let col = index%columns;
    let row = (index-col)/rows;
    let rowPosition = 100*(row/(rows-1)) + "%";
    let colPosition = 100*(col/(columns-1)) + "%";
    let position =  colPosition +" "+ rowPosition
    let itemStyle = {
      $hover: {borderRadius: '5%'},
      backgroundImage: `url(${bgSrc})`,
      backgroundPosition: position,
      backgroundSize: rows*100 + "% " + columns*100 + "%",
    }
    return (<div id={"grid:"+row+"-"+col} key={index} className={styles.gridItem} style={itemStyle}>
    </div>
)});

  return <div className={styles.gridContainer} style={gridStyle}>{gridItems}</div>;
};

export default Grid;
