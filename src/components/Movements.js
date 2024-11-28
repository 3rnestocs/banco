import React, { useState } from 'react';
import { Box, Typography, Divider, Pagination } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Movements = ({ onClose }) => { // Recibe la función onClose
  // Lista completa de movimientos
  const allMovements = [
    { id: 1, type: 'Pago móvil', reference: '04014145245847853652', amount: 320.25, date: '10 de enero, 2024', isPositive: true },
    { id: 2, type: 'Pago móvil', reference: '04014145245847853652', amount: 255.57, date: '10 de enero, 2024', isPositive: false },
    { id: 3, type: 'Pago móvil', reference: '04014145245847853652', amount: 100.75, date: '10 de enero, 2024', isPositive: true },
    { id: 4, type: 'Pago móvil', reference: '04014145245847853652', amount: 150.00, date: '08 de enero, 2024', isPositive: false },
    { id: 5, type: 'Pago móvil', reference: '04014145245847853652', amount: 200.10, date: '08 de enero, 2024', isPositive: true },
    { id: 6, type: 'Pago móvil', reference: '04014145245847853652', amount: 175.00, date: '30 de diciembre, 2023', isPositive: false },
    { id: 7, type: 'Pago móvil', reference: '04014145245847853652', amount: 190.25, date: '29 de diciembre, 2023', isPositive: true },
    { id: 8, type: 'Pago móvil', reference: '04014145245847853652', amount: 310.00, date: '28 de diciembre, 2023', isPositive: false },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const displayedMovements = allMovements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box
      sx={{
        flex: 1,
        marginLeft: '25px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: 2,
        padding: '20px',
        overflowY: 'auto',
        height: 'calc(100vh - 150px)',
        marginRight: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            marginBottom: '20px',
            color: 'black',
            fontFamily: 'Roboto',
          }}
        >
          Operaciones
        </Typography>

        {displayedMovements.map((movement, index) => (
          <React.Fragment key={movement.id}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '10px 0',
              }}
            >
              <Box>
                <Typography variant="body1" sx={{ color: 'gray' }}>
                  {movement.type}
                </Typography>
                <Typography variant="body2" sx={{ color: movement.isPositive ? 'green' : 'red', marginTop: '5px' }}>
                  {movement.reference}
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'black',
                    fontWeight: 'normal',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  Bs. {movement.amount.toFixed(2)}
                  {movement.isPositive ? (
                    <ArrowUpwardIcon sx={{ color: 'green', fontSize: '20px' }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ color: 'red', fontSize: '20px' }} />
                  )}
                </Typography>
                <Typography variant="body1" sx={{ color: 'gray', fontSize: '14px' }}>
                  {movement.date}
                </Typography>
              </Box>
            </Box>

            {/* Divider entre cada movimiento */}
            {index < displayedMovements.length - 1 && (
              <Divider sx={{ borderColor: '#49BEB7', borderWidth: '1px' }} />
            )}
          </React.Fragment>
        ))}
      </Box>

      <Divider sx={{ borderColor: '#8dd7d2', borderWidth: '1px', marginBottom: '320px' }} />

      {/* Paginación */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(allMovements.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#085F63',
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#085F63',
              color: '#ffffff',
            },
            '& .MuiPaginationItem-root:hover': {
              backgroundColor: '#d1eeef',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Movements;
