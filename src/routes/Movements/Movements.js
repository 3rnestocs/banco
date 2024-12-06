import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Pagination } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { getMovementsAPI } from '../../api/modules/movement'; 

const Movements = ({ onClose }) => {
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [movements, setMovements] = useState([]); // Movements data
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error message

  // Fetch movements data when the component mounts or the page changes
  useEffect(() => {
    const fetchMovements = async () => {
      setLoading(true);
      setError('');
      try {
        const pagination = { page: currentPage, limit: itemsPerPage };
        const response = await getMovementsAPI(pagination);

        // Check for a valid response
        if (response && response.data) {
          setMovements(response.data); // Map directly from `data` array
          setTotalPages(Math.ceil(response.data.length / itemsPerPage)); // Update pages
        } else {
          setError(response.message || 'Error fetching movements.');
        }
      } catch (err) {
        setError('Failed to fetch movements. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovements();
  }, [currentPage]);

  // Handle page change
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

        {/* Loading State */}
        {loading && <Typography variant="body1">Cargando movimientos...</Typography>}

        {/* Error State */}
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}

        {/* Display Movements */}
        {!loading &&
          !error &&
          movements.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          ).map((movement, index) => (
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
                    {movement.description || 'Operación'}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: movement.multiplier > 0 ? 'green' : 'red', marginTop: '5px' }}
                  >
                    ID: {movement.id}
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
                    Bs. {movement.amount?.toFixed(2) || '0.00'}
                    {movement.multiplier > 0 ? (
                      <ArrowUpwardIcon sx={{ color: 'green', fontSize: '20px' }} />
                    ) : (
                      <ArrowDownwardIcon sx={{ color: 'red', fontSize: '20px' }} />
                    )}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'gray', fontSize: '14px' }}>
                    {new Date(movement.created_at).toLocaleDateString('es-VE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Typography>
                </Box>
              </Box>

              {/* Divider between each movement */}
              {index < movements.length - 1 && (
                <Divider sx={{ borderColor: '#49BEB7', borderWidth: '1px' }} />
              )}
            </React.Fragment>
          ))}
      </Box>

      <Divider sx={{ borderColor: '#8dd7d2', borderWidth: '1px', marginBottom: '24px' }} />

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={totalPages}
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
