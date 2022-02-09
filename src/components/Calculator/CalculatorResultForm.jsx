import React from 'react';
import ContentBox from '../ContentBox/ContentBox';
import TableBody from '../Table/TableBody';
import TableDescription from '../Table/TableDescription';
import TableTitle from '../Table/TableTitle';
import Table from '../Table/Table';

const CalculatorResultForm = ({dataType, dataInputs, textTitle, textSubtitle}) => {
    return (
        <div id='talentResults'>
            <ContentBox addStyles={{maxWidth: '100%', padding: '20px', boxShadow: "0px 0px 20px rgba(88,92, 229, 0.15)", margin: '40px auto'}}>
                <Table>
                    <TableTitle>{textTitle}</TableTitle>
                    <TableDescription>{textSubtitle}</TableDescription>
                    <TableBody dataType={dataType} dataInputs={dataInputs} />
                </Table>
            </ContentBox>
        </div>
    );
};

export default CalculatorResultForm;