import React, { useRef, useState } from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'tomato'
    },

    section: {
        color: 'white',
        textAlign: 'left',
        margin: 30
    }
});

const CV = ({ person }: any) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Name: {person.name}</Text>
                <Text>Objective: {person.objective}</Text>
                <Text>Email: {person.email}</Text>
                <Text>Phone: {person.phone}</Text>
                <Text>Location: {person.location}</Text>
                <Text>Website: {person.website}</Text>
            </View>
        </Page>
    </Document>
);

export default CV;