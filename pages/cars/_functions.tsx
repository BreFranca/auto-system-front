import React, { MouseEventHandler } from 'react'
import {
  columnActions,
  ColumnCustom,
  ColumnText,
} from '../../src/helpers/utils/table-search';

type IColumns = {
  onPrint?(record: object): MouseEventHandler<HTMLElement>
  editLink?: string
  onDelete?(record: object): MouseEventHandler<HTMLElement>
}

export const columns = ({
  onPrint,
  editLink,
  onDelete,
}: IColumns) => [
  ColumnText({
    title: 'ID',
    dataIndex: 'id',
  }),
  ColumnCustom({
    title: 'Marca/Modelo',
    dataIndex: 'age',
    render: (text: string, record: { brand: string, model: string }) => (
      <span>{`${record.brand} ${record.model}`}</span>
    ),
  }),
  ColumnCustom({
    title: 'Ano Fab/Ano Modelo',
    dataIndex: 'age',
    render: (text: string, record: { years: { fabrication: Number, model: Number } }) => (
      <span>{`${record.years.fabrication}/${record.years.model}`}</span>
    ),
  }),
  ColumnText({
    title: 'Placa',
    dataIndex: 'licensePlate',
  }),
  ColumnText({
    title: 'Status',
    dataIndex: 'status',
  }),
  columnActions({
    title: 'Ações',
    dataIndex: 'actions',
    onPrint,
    editLink,
    onDelete,
  }),
];

export const data = [
  {
    id: '1',
    title: 'BMW 2.0 X1 16V TURBO AUTOMÁTICO',
    brand: 'BMW',
    model: 'X1 2.0 16V TURBO ACTIVEFLEX SDRIVE20I X-LINE 4P AUTOMÁTICO',
    years: {
      fabrication: 2015,
      model: 2016,
    },
    status: 'out-of-stock',
    licensePlate: 'EKX-2D00',
    tags: ['suv', 'bmw'],
  },
  {
    id: '2',
    title: 'AUDI A3 1.8 TFSI AUTOMÁTICA',
    brand: 'AUDI',
    model: 'A3 1.8 TFSI AMBIENTE GASOLINA 4P MULTITRONIC',
    years: {
      fabrication: 2015,
      model: 2016,
    },
    status: 'in-stock',
    licensePlate: 'AEE-2131',
    tags: ['audi', 'sport'],
  },
  {
    id: '3',
    title: 'MERCEDES-BENZ GLA 200 1.6 CGI FLEX ADVANCE 7G-DCT',
    model: 'GLA 200 1.6 CGI FLEX ADVANCE 7G-DCT',
    brand: 'MERCEDES-BENZ',
    years: {
      fabrication: 2018,
      model: 2019,
    },
    status: 'in-stock',
    licensePlate: 'AED-2B31',
    tags: ['mercedes', 'gla'],
  },
];
