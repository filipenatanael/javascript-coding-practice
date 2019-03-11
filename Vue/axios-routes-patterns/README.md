# Axios Routes Patterns

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

```javascript
// services/config.js

import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:8181/api/',
});
```

```javascript
// services/product.js

import { http } from './config'

export default	{

	store:(product)=>{
		return http.post('product', product);
  },

	update:(product)=>{
		return http.put('product', product);
  },

  show:()=>{
		return http.get('products')
  },

	delete:(product)=>{
		return http.delete('product', { data: product })
	}
}

```

[BackEnd](https://github.com/MichelliBrito/produtos-apirest)
