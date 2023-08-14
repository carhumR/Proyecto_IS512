from flask import Flask, render_template, jsonify, request
from models import db, Product

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
db.init_app(app)

app = Flask(__name__)

# Datos simulados para el carrito
cart = []

# Ruta para agregar producto al carrito
@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    product = {
        'title': data['title'],
        'price': data['price']
    }
    cart.append(product)
    return jsonify({'message': 'Producto añadido al carrito'})

# Ruta para obtener contenido del carrito
@app.route('/get_cart', methods=['GET'])
def get_cart():
    return jsonify(cart)

# Ruta para eliminar producto del carrito
@app.route('/remove_from_cart/<int:index>', methods=['DELETE'])
def remove_from_cart(index):
    if 0 <= index < len(cart):
        del cart[index]
        return jsonify({'message': 'Product removed from cart successfully'})
    else:
        return jsonify({'error': 'Invalid index'})

# Ruta para servir el archivo index.html desde el frontend
@app.route('/')
def serve_frontend():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)