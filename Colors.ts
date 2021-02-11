
const colorNames = {
    transparent: 'transparent',
    red: '#FF0000',
    koromiko: '#FFAD4D',
    peachCream: '#FFF1E0',
    navyBlue: '#074AE1',
    malibu: '#63A1FF',
    shamrock: '#27CFA2',
    white: '#FFFFFF',
    solitude: '#EBEFF5',
    aliceBlue: '#E3EEFF',
    mystic: '#E6EAF0',
    geyser: '#D0D6E2',
    heather: '#BFC5D2',
    rockBlue: '#A4AEC2',
    manatee: '#868FA3',
    trout: '#4F535E',
    lanaGreen: '#77A803',
    gray: 'gray'
  };
  
  export default {
    primary: colorNames.lanaGreen,
    secondary: colorNames.shamrock,
  
    font: colorNames.rockBlue,
    fontPrimary: colorNames.navyBlue,
    fontSecondary: colorNames.manatee,
    fontInverted: colorNames.white,
  
    placeholder: colorNames.heather,
  
    border: colorNames.mystic,
    background: colorNames.solitude,
  
    iconPrimary: colorNames.navyBlue,
    iconPrimaryLight: colorNames.malibu,
    iconSecondary: colorNames.rockBlue,
    iconSecondaryLight: colorNames.geyser,
    iconInverted: colorNames.white,
    iconDark: colorNames.lanaGreen,
  
    overlay: 'rgba(21, 22, 25, 0.8)',
    overlayLight: 'rgba(255,255,255,0.5)',
  
    success: colorNames.shamrock,
    error: colorNames.red,
  
    switchBackground: colorNames.rockBlue,

    ...colorNames,
  };
  