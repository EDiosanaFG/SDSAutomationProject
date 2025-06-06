# SDS Automation Project

## How to Run
Run `npm start` in the terminal.

## Overview
- Project started: May 22, 2025
- Requested by: Gordon Huie

### Description
This project is automates the conversion of Safety Data Sheets (SDS) from suppliers such that it appears as an Inovo safety data sheet. For example, if the user inputs a supplier's safety data sheet, it will output the relevant information from that sheet.

### Technologies
- DuckDNS for hosting the back-end API
- Firebase for hosting the front-end
- Vue.js with TypeScript for front-end
- TypeScript and Express.js for back-end
- OpenAI API for .pdf analysis

## Notes
- The Inovo sheet is essentially just a rebranded and standardized version of the supplier data sheet
- The Inovo sheet lists Inovo as the supplier
- The Inovo sheet is generated using Microsoft Access

## Function
The following explains how this application functions

### Original Steps
1. Download the supplier SDS
2. Manually input the information from the supplier SDS into the MS Access database
3. Output the data as a Report

### Method 1: A.I. Conversion
Credits: Gordon thought of using an Excel document to move information from my programs to MS Access

- Due to the variability of data sheets between suppliers, it is not feasible to create an automation for every single one, which is why we will be leveraging A.I. to extract the data and output it to a format that can be automated.

#### Functional Steps:
1. The program initiates a Node.js server in TypeScript that connects to the OpenAI API
2. The program reads the data from the .docx file and send it to the trained AI model
3. The program receives the .json response from the A.I. model
4. The program sends the .json response to a .xlsx template that is modeled after the MS Access data entry row
5. The user copies and pastes the information from .xlsx document into the MS Access data entry row
6. The user outputs the row as a report
