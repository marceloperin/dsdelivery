function OrderSummary() {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">1</strong>
                        PEDIDOS
                    </span>
                    <span className="order-summary-total">
                        <strong className="amount-selected">50,00</strong>
                        TOTAL
                    </span>
                </div>
                <button className="order-summary-make-order">REALIZAR PEDIDO</button>
            </div>
        </div>
    )
}

export default OrderSummary;