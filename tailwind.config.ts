import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        rajdhani: ['Rajdhani', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '4.5': '1.125rem' /* 18px */,
        '5.5': '1.375rem' /* 22px */,
        '6.5': '1.625rem'  /* 26px */,
        '7.5': '1.875rem' /* 30px */,
        '8.5': '2.125rem' /* 34px */,
        '10.5': '2.625rem' /* 42px */,
        '11.5': '2.875rem' /* 46px */,
        '12.5': '3.125rem' /* 50px */,
        '15': '3.75rem' /* 60px */,
        '18': '4.5rem' /* 72px */,
        '22': '5.5rem' /* 90px */,
        '22.5': '5.625rem' /* 90px */,
        '62.5': '15.625rem' /* 250px */,
        '68': '17rem' /* 270px */,
        '70': '17.5rem' /* 280px */,
        '90': '22.5rem' /* 360px */,
        '112.5': '28.125rem' /* 450px */,
        '125': '31.25rem' /* 500px */,
      },
      colors: {
        /* Main Colors */

        /* Cards */

        completed: {
          hi: '#E1FF29',
          '100': '#DDF1D9',
          '900': '#57AA48',
        },

        approved: {
          hi: '#29FFFF',
          '100': '#E7E8FA',
          '900': '#484CAA',
        },

        'client-arrived': {
          hi: '#F8A7FF',
          '100': '#F4DFF2',
          '900': '#AA48A0',
        },

        cancelled: {
          hi: '#F25353',
          '100': '#FCEAEA',
          '900': '#F1C2C2',
        },

        'no-show': {
          hi: '#B7BC9A',
          '100': '#EDF3FD',
          '900': '#484B50',
        },
        'cgreen': {
          'hi': '#E1FF29',
          '50': '#f5faf3',
          '100': '#e6f5e3',
          '200': '#ceeac8',
          '300': '#a6d99c',
          '400': '#77be6a',
          '500': '#57aa48' /* This */,
          '600': '#408534',
          '700': '#35692c',
          '800': '#2d5427',
          '900': '#254621',
          '950': '#11250e',
        },
        'cblue': {
          'hi': '#29FFFF',
          '50': '#f3f4fb',
          '100': '#e3e7f6',
          '200': '#ced6ef',
          '300': '#acbae4',
          '400': '#8497d6',
          '500': '#6777ca',
          '600': '#535dbd',
          '700': '#484caa' /* This */,
          '800': '#40418d',
          '900': '#373971',
          '950': '#252646',
        },
        'cfuchsia': {
          'hi': '#F8A7FF',
          '50': '#fdf6fd',
          '100': '#faedfa',
          '200': '#f4daf3',
          '300': '#ebbce8',
          '400': '#de94d8',
          '500': '#cc69c4',
          '600': '#aa48a0' /* This */,
          '700': '#903b85',
          '800': '#76326d',
          '900': '#622d5a',
          '950': '#3f1339',
        },
        'crose': {
          'hi': '#F1C2C2',
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#ffc9c9',
          '300': '#fda4a4',
          '400': '#f97070',
          '500': '#f25353' /* This */,
          '600': '#de2424',
          '700': '#bb1a1a',
          '800': '#9a1a1a',
          '900': '#801c1c',
          '950': '#460909',
        },
        'czinc': {
          'hi': '#B7BC9A',
          '50': '#f5f6f6',
          '100': '#e5e7e8',
          '200': '#ced1d3',
          '300': '#abb0b5',
          '400': '#81878f',
          '500': '#666c74',
          '600': '#585c62',
          '700': '#484b50' /* This */,
          '800': '#424548',
          '900': '#3a3c3f',
          '950': '#242528',
        },
        /* Alerts */
        'success': {
          '100': '#E8F8F2',
          '500': '#89DCBE',
          '900': '#13B97D',
        },
        'error': {
          '100': '#FFEFEF',
          '500': '#FFABAB',
          '900': '#FE5656',
        },
        'warning': {
          '100': '#FFF9EE',
          '500': '#FFDDAA',
          '900': '#FFBA55',
        },
      },
    },
  },
};
