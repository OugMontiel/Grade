// 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

export const getAllOrnamentalesMas100Stock = async()=>{
    let res = await fetch("http://localhost:5106/products?gama=Ornamentales&&stock_gt=100");
    let data = await res.json();
    let dataUpdate=data.sort( (a, b) => {
        const mayor = a.price_sale;
        const menor = b.price_sale;
        return menor-mayor
    });
    return dataUpdate
}