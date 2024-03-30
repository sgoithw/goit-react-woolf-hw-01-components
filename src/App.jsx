export const App = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
      }}
    >
      {children}
    </div>
  );
};
