/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			greywhite: '#F5F5F5',
  			darkgreywhite: '#E1E1E1',
  			goldgreen: '#A9832C',
  			yellow: '#DDB61A',
  			brickred: '#C15A16',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			'6': '6px',
			'8': '8px',
  			'10': '10px',
  			'11': '11px',
  			'14': '14px',
  			'15': '15px',
  			'18': '18px',
  			'19': '19px',
  			'30': '30px',
  			'33': '33px',
  			'35': '35px',
  			'37': '37px',
  			'39': '39px',
  			'60': '60px',
  			'62': '62px',
  			'28': '28px',
  			'20': '20px',
  			'22': '22px',
  			'25': '25px',
  			'27': '27px',
  			'74': '74px',
  			'75': '75px',
  			'90': '90px',
  			'96': '96px',
  			'40': '40px',
  			'50': '50px',
  			'53': '53px',
  			'48': '48px',
  			'399': '399px',
  			'147': '147px',
  			'150': '150px',
  			'43': '43px',
  			'134': '134px',
  			'183': '183px',
  			'188': '188px',
			'220': '220px',
			'232': '232px',
  			'261': '261px',
			'239': '239px',
  			'372': '372px'
  		},
  		borderRadius: {
			"5":"5px",
		    '10':"10px",
  			'20': '20px',
  			'30': '30px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontSize: {
  			'10': '10px',
  			'md': '15px',
  			'xss': '13px',
			'17':"17px",
  			'25': '25px',
  			'2.5xl': '28px',
  			'3.5xl': '35px',
  			'4.5xl': '50px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};