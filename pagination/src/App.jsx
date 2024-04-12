import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
  }

  const fetchProducts = async () =>{
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
    const data = await res.json()

    if (data&&data.products) {
      setProducts(data.products)
      setTotalPages(data.total / 10)
    }
    console.log(products)
  }

  useEffect(()=>{
    fetchProducts()
  }, [page])
  
  return (
    <div>
      {
        products.length>0 && <div className='product-grid'>
        {products.map(prod => {
        return (<div className='product-grid__card' key={prod.id}>
          <img src={prod.thumbnail} alt={prod.title}/>
            <h4>{prod.title}</h4>
            <h6>{prod.description}</h6>
            <div className="flex-between">
              <h5>💲{prod.price}</h5>
              <h5>⭐{prod.rating}</h5>
            </div>
          </div>)
          })
        }
        </div>
      }
      {
        products.length>0 && <div className='pagination'>
          {
            [...Array(totalPages)].map((_, i)=>{
              return (<span className={page===i+1?'selected-page page':'page'} onClick={()=>pageHandler(i+1)} key={i}>{i+1}</span>)
            })
          }
        </div>                                                                                                                                         
      }
    </div>
  )
}

export default App
