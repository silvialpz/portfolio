function PersonalizedIndicator(onClick, isSelected, index) {
  const indicatorStyle = {
    display: 'inline-block',
    margin: '0 7px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: isSelected ? '#FF7E67' : '#C4BFE0',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
  };

  return (
    <li
      onClick={onClick}
      type='button'
      style={indicatorStyle}
    >
    </li>
  );
}

export default PersonalizedIndicator;