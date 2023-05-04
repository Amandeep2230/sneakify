const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {

        const { items, email } = req.body;

        const transformedItems = items.map(item => ({
            quantity: 1,
            price_data: {
                currency: 'cad',
                unit_amount: item.itemPrice * 100,
                product_data: {
                    name: item.itemName,
                    images: [item.itemImg],
                },
            },
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            shipping_address_collection: {
                allowed_countries: ['CA', 'US'],
            },
            line_items: transformedItems,
            mode: 'payment',
            success_url: `${process.env.HOST}/?success=true`,
            cancel_url: `${process.env.HOST}/cart`,
            metadata: {
                email,
                images: JSON.stringify(items.map(item=>item.itemImg))
            },
        });
        res.status(200).json({ id: session.id })
    };