
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import style from './style.module.css';

const Students = [
    {
        "name":"Алешин Сергей",
        "born":"04.10.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.3,
        "grade2019": 4.5,
        "grade2020": 4.8
    },
    {
        "name":"Анитова Ксения",
        "born":"01.05.2001",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 3.8,
        "grade2019": 4.6,
        "grade2020": 5.0
    },
    {
        "name":"Белов Илья",
        "born":"01.01.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 3.4,
        "grade2019": 4.2,
        "grade2020": 4.7
    },
    {
        "name":"Владимиров Илья",
        "born":"08.02.2002",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 3.4,
        "grade2019": 4.5,
        "grade2020": 4.0
    },
    {
        "name":"Глазунов Андрей",
        "born":"21.05.1999",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 3.2,
        "grade2019": 3.5,
        "grade2020": 4.4
    },
    {
        "name":"Гудков Данила",
        "born":"25.12.2001",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 5.0,
        "grade2019": 4.5,
        "grade2020": 4.0
    },
    {
        "name":"Доудар Роман",
        "born":"30.03.1999",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 3.3,
        "grade2019": 4.5,
        "grade2020": 3.0
    },
    {
        "name":"Есауленко Ирина",
        "born":"30.11.1998",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 5.0,
        "grade2019": 5.0,
        "grade2020": 5.0
    },
      {
        "name":"Жарков Валерий",
        "born":"04.07.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 5.0,
        "grade2019": 3.2,
        "grade2020": 2.5
    },
    {
        "name":"Калатанова Елизавета",
        "born":"17.01.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.3,
        "grade2019": 3.5,
        "grade2020": 5.0
    },
    {
        "name":"Камалиев Эдуард",
        "born":"18.03.1999",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.2,
        "grade2019": 3.0,
        "grade2020": 5.0
    },
    {
        "name":"Карасев Данила",
        "born":"24.12.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 3.3,
        "grade2019": 3.5,
        "grade2020": 4.4
    },
      {
        "name":"Копиевский Никита",
        "born":"01.04.1997",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 3.7,
        "grade2019": 3.7,
        "grade2020": 4.8
    },
    {
        "name":"Коротин Борис",
        "born":"12.04.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.1,
        "grade2019": 4.1,
        "grade2020": 4.1
    },
    {
        "name":"Коршунов Михаил",
        "born":"24.04.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.5,
        "grade2019": 4.5,
        "grade2020": 4.5
    },
    {
        "name":"Коршунов Сергей",
        "born":"01.11.2002",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.2,
        "grade2019": 4.4,
        "grade2020": 4.4
    },
    {
        "name":"Костиков Сергей",
        "born":"25.03.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 3.3,
        "grade2019": 3.5,
        "grade2020": 3.8
    },
    {
        "name":"Кузьмичев Данил",
        "born":"03.03.2001",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.3,
        "grade2019": 4.5,
        "grade2020": 3.8
    },
    {
        "name":"Лаврентьев Николай",
        "born":"03.04.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 3.3,
        "grade2019": 4.4,
        "grade2020": 4.2
    },
    {
        "name":"Лебедев Иван",
        "born":"22.04.1999",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.3,
        "grade2019": 4.5,
        "grade2020": 4.8
    },
    {
        "name":"Машинин Илья",
        "born":"24.02.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.3,
        "grade2019": 4.0,
        "grade2020": 3.8
    },
    {
        "name":"нестеров Никита",
        "born":"11.12.1999",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.5,
        "grade2019": 4.5,
        "grade2020": 4.0
    },
    {
        "name":"Оборенкова Елизавета",
        "born":"29.01.2002",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.3,
        "grade2019": 4.5,
        "grade2020": 3.8
    },
    {
        "name":"Паршикова Анна",
        "born":"21.09.1998",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.1,
        "grade2019": 3.5,
        "grade2020": 3.7
    },
    {
        "name":"Сиротин Никита",
        "born":"16.02.2000",
        "addmission":2018,
        "year": 3,
        "group": "BFI1801",
        "grade2018": 4.1,
        "grade2019": 3.5,
        "grade2020": 4.5
    },
]

const SortedStudents = [
  {
      "name":"Алешин Сергей",
      "born":"01.01.2000",
      "addmission":2018,
      "year": 3,
      "group": "BFI1801",
      "grade": ((Students[0].grade2018+Students[0].grade2019+ Students[0].grade2020)/3)
  },
  {
      "name":"Анитова Ксения",
      "born":"01.01.2000",
      "addmission":2018,
      "year": 3,
      "group": "BFI1801",
      "grade": ((Students[1].grade2018+Students[1].grade2019+ Students[1].grade2020)/3)
  },
  {
      "name":"Белов Илья",
      "born":"01.01.2000",
      "addmission":2018,
      "year": 3,
      "group": "BFI1801",
      "grade": ((Students[2].grade2018+Students[2].grade2019+ Students[2].grade2020)/3)
  },
  {
      "name":"Владимиров Илья",
      "born":"01.01.2000",
      "addmission":2018,
      "year": 3,
      "group": "BFI1801",
      "grade": ((Students[3].grade2018+Students[3].grade2019+ Students[3].grade2020)/3)
  },
  {
      "name":"Глазунов Андрей",
      "born":"01.01.2000",
      "addmission":2018,
      "year": 3,
      "group": "BFI1801",
      "grade": ((Students[4].grade2018+Students[4].grade2019+ Students[4].grade2020)/3)
  },
  {
    "name":"Гудков Данила",
    "born":"25.12.2001",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[5].grade2018+Students[5].grade2019+ Students[5].grade2020)/3)
},
{
    "name":"Доудар Роман",
    "born":"30.03.1999",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[6].grade2018+Students[6].grade2019+ Students[6].grade2020)/3)
},
{
    "name":"Есауленко Ирина",
    "born":"30.11.1998",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[7].grade2018+Students[7].grade2019+ Students[7].grade2020)/3)
},
  {
    "name":"Жарков Валерий",
    "born":"04.07.2000",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[8].grade2018+Students[8].grade2019+ Students[8].grade2020)/3)
},
{
    "name":"Калатанова Елизавета",
    "born":"17.01.2000",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[9].grade2018+Students[9].grade2019+ Students[9].grade2020)/3)
},
{
    "name":"Камалиев Эдуард",
    "born":"18.03.1999",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade2018": 4.2,
    "grade": ((Students[10].grade2018+Students[10].grade2019+ Students[10].grade2020)/3)
},
{
    "name":"Карасев Данила",
    "born":"24.12.2000",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[11].grade2018+Students[11].grade2019+ Students[11].grade2020)/3)
},
  {
    "name":"Копиевский Никита",
    "born":"01.04.1997",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[12].grade2018+Students[12].grade2019+ Students[12].grade2020)/3)
},
{
    "name":"Коротин Борис",
    "born":"12.04.2000",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[13].grade2018+Students[13].grade2019+ Students[13].grade2020)/3)
},
{
    "name":"Коршунов Михаил",
    "born":"24.04.2000",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[14].grade2018+Students[14].grade2019+ Students[14].grade2020)/3)
},
{
    "name":"Коршунов Сергей",
    "born":"01.11.2002",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[15].grade2018+Students[15].grade2019+ Students[15].grade2020)/3)
},
{
    "name":"Костиков Сергей",
    "born":"25.03.2000",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[16].grade2018+Students[16].grade2019+ Students[16].grade2020)/3)
},
{
    "name":"Кузьмичев Данил",
    "born":"03.03.2001",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[17].grade2018+Students[17].grade2019+ Students[17].grade2020)/3)
},
{
    "name":"Лаврентьев Николай",
    "born":"03.04.2000",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[18].grade2018+Students[18].grade2019+ Students[18].grade2020)/3)
},
{
    "name":"Лебедев Иван",
    "born":"22.04.1999",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[19].grade2018+Students[19].grade2019+ Students[19].grade2020)/3)
},
{
    "name":"Машинин Илья",
    "born":"24.02.2000",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[20].grade2018+Students[20].grade2019+ Students[20].grade2020)/3)
},
{
    "name":"Нестеров Никита",
    "born":"11.12.1999",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[21].grade2018+Students[21].grade2019+ Students[21].grade2020)/3)
},
{
    "name":"Оборенкова Елизавета",
    "born":"29.01.2002",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[22].grade2018+Students[22].grade2019+ Students[22].grade2020)/3)
},
{
    "name":"Паршикова Анна",
    "born":"21.09.1998",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[23].grade2018+Students[23].grade2019+ Students[23].grade2020)/3)
},
{
    "name":"Сиротин Никита",
    "born":"16.02.2000",
    "addmission":2018,
    "year": 3,
    "group": "BFI1801",
    "grade": ((Students[24].grade2018+Students[24].grade2019+ Students[24].grade2020)/3)
},
]

SortedStudents.sort(function(a,b){return b["grade"] - a["grade"]});

console.log(SortedStudents);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, born, addmission, year, group, grade2018, grade2019, grade2020) {
  return { name, born, addmission, year, group, grade2018, grade2019, grade2020 };
}

const rows = [

];

for (var i = 0; i<25; i++){
  rows.push(createData(Students[i].name,Students[i].born, Students[i].addmission, Students[i].year, Students[i].group, Students[i].grade2018, Students[i].grade2019, Students[i].grade2020))
}

const sortedRows = [
  
];

for (var j = 0; j <25; j++){
  sortedRows.push(createData(SortedStudents[j].name, SortedStudents[j].born, SortedStudents[j].admission, SortedStudents[j].year, SortedStudents[j].group, SortedStudents[j].grade))
}



const BasicTable = (props) => {
  const classes = useStyles();

  if (props.sorted === 0){
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя и Фамилия</TableCell>
            <TableCell align="right">Дата рождения</TableCell>
            <TableCell align="right">Год поступления</TableCell>
            <TableCell align="right">Курс</TableCell>
            <TableCell align="right">Группа</TableCell>
            <TableCell align="right">Средняя оценка за : 2018</TableCell>
            <TableCell align="right">2019</TableCell>
             <TableCell align="right">2020</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.born}</TableCell>
              <TableCell align="right">{row.addmission}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.group}</TableCell>
              <TableCell align="right">{row.grade2018}</TableCell>
              <TableCell align="right">{row.grade2019}</TableCell>
              <TableCell align="right">{row.grade2020}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
   }
  return(
    <div>
    <h2 className = {style.sortedLabel}>Список отсортирован по средней оценке</h2>
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Имя и Фамилия</TableCell>
          <TableCell align="right">Дата рождения</TableCell>
          <TableCell align="right">Год поступления</TableCell>
          <TableCell align="right">Курс</TableCell>
          <TableCell align="right">Группа</TableCell>
          <TableCell align="right">Средняя оценка</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {SortedStudents.map((sortedRows) => (
          <TableRow key={sortedRows.name}>
            <TableCell component="th" scope="row">
              {sortedRows.name}
            </TableCell>
            <TableCell align="right">{sortedRows.born}</TableCell>
            <TableCell align="right">{sortedRows.addmission}</TableCell>
            <TableCell align="right">{sortedRows.year}</TableCell>
            <TableCell align="right">{sortedRows.group}</TableCell>
            <TableCell align="right">{(sortedRows.grade).toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
     );
}

export default BasicTable;