
document.querySelector('.print-btn').addEventListener('click', function ()
{
  const receiptContent = document.querySelector('.receipt').innerHTML;
  const printWindow = window.open('', '', 'height=800,width=800');

  printWindow.document.write(`
      <html>
        <head>
          <title>ভূমি উন্নয়ন কর পরিশোধ রসিদ</title>
          <style>
            @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@100..900&family=Noto+Serif+Bengali:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tiro+Bangla:ital@0;1&display=swap");

body {
  background-color: #f4ffe6;
  min-height: 100vh;
  box-sizing: border-box;
}
  
.receipt {
  font-family: "Noto Serif Bengali", serif;
  font-size: 10px;
  max-width: 900px;
  margin: 20px 19%;
  background-color: #fff;
  border-radius: 5px;
  min-height: 100vh;
}

.header {
  font-family: "Noto Serif Bengali", serif;
  font-size: 12px;
  line-height: 1.3;
  margin-bottom: 10px;
}

.section {
  font-family: "Noto Serif Bengali", serif;
  font-size: 12px;
  padding: 5px 0;
}

.section-title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: underline;
  font-size: 11px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6px;
}

.col {
  flex: 1;
  min-width: 200px;
  margin-bottom: 4px;
}

.table {
  display: table;
  width: 100%;
  /* border-collapse: collapse; */
  border: .7px dotted #000;
}

.table-row {
  display: table-row;
  border: .7px dotted #000;
  font-size: 10px;
}

.table-head {
  font-weight: 600;
  border: 1px dotted #000;
  font-size: 10px;
  font-weight: bolder;
}

.table-row div {
  display: table-cell;
  border: 1px dotted #000;
  padding: 1px;
  text-align: center;
}

.qr {
  text-align: center;
  min-width: 27%;
}

.left-heading p {
  padding: 0px;
  margin: 0;
}
.heading {
  display: flex;
  justify-content: space-between;
}
.main-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.label-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.label-text {
  white-space: nowrap;
  margin-right: 10px;
}

.unlerline-button {
  border-bottom: 1px dotted #000;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}

.fill-remaining {
  flex-grow: 1;
  padding: 0;
  margin: 0;
}
.location-info {
  display: flex;
  margin: 2px 0;
}
.zone {
  min-width: 50%;
}

.upazila {
  min-width: 25%;
}
.right-text {
  text-align: right;
}

.my-2 {
  margin: 1px 0;
}
.sl-row {
  width: 11.5%;
}
.owner-name {
  text-align: start !important;
}
.line {
  margin-bottom: 10px;
}
.footer {
  display: flex;
  /* justify-content: space-evenly; */
  align-items: start;
  margin-top: 8px;
  font-size: 11px;
}
.date-container {
  /* font-family: "Siyam Rupali", "SolaimanLipi", Arial, sans-serif; */
  line-height: 1.5;
  width: fit-content;
  display: flex;
}

.date-label {
  margin-bottom: 4px;
  padding: 8.5px 0;
}

.date-box {
  border-bottom: 1px solid #000;
  padding-bottom: 4px;
  margin-bottom: 4px;
}
.date-underline {
  border-top: 1px solid #000;
  padding: 5px 0;
}
.box {
  padding: 10px;
  border: 1.3px dotted #000;
  border-radius: 2%;
  padding-bottom: 350px;
  position: relative;
}
.page-no {
  text-align: right;
  padding: 0;
  margin: 0;
  font-size: 10px;
}

.last-line {
  min-width: 97%;
  position: absolute;
  bottom: 5px;
}

hr {
  border-top: 1px dashed #000;
  padding: 0;
  margin: 0;
}

.gap {
  margin: 5px 0px;
}
.fifty {
  width: 46%;
}

.main-table {
  border: .5px solid silver;
  font-size: 13px;
}

.main-table-heading {
  text-decoration: none;
  font-size: 13px;
  width: 100%;
  margin: 0;
  border: 1px solid silver;
  border-bottom: none;
  padding: 5px 0;
}

.table-row-x {
  display: table-row;
  border: 1px solid silver;
  font-size: 10px;
}

.py-3 {
  padding: 20px;
}
.table-row-x div {
  display: table-cell;
  border: 0.7px solid silver;
  border-top: none;
  padding: 10px;
  font-size: 13px;
  text-align: center;
  font-weight: 350;
  word-spacing: 2px;
}

.total-inword {
  font-size: 11px;
  word-spacing: 2px;
}
.date-gap {
  margin-left: 10px;
}

.signeture {
  text-align: center;
  padding-left: 17.5px;
  font-size: 11px;
}

.font-year {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.left-text {
  text-align: left !important;
  padding-left: 8px;
}

.owner {
  width: 62%;
}

.cls{
  width: 32%;
}
  
@page {
  margin: 0.18in 0.44in;
}


          </style>
        </head>
        <body onload="window.print(); window.close();">
          ${receiptContent}
        </body>
      </html>
    `);

  printWindow.document.close();
});

