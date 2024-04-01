function Arrow({ direction, onClick }) {
    return (
      <div
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          zIndex: 2,
          [direction === 'left' ? 'left' : 'right']: '10px', 
        }}
      >
        
        {direction === 'left' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M10 6l-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        )}
      </div>
    );
  }


  export default Arrow;
  