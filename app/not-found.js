import React from 'react';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Error 404 | Página no encontrada</h2>
      <p style={styles.paragraph}>Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    marginBottom: '100px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto',
  },
};
