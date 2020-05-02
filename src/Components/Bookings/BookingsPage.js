import React, {Component} from 'react';
import AuthContext from "../../Context/auth-context";
import BookingItem from "./BookingItem";
class BookingsPage extends Component {

    state={
        bookings:[]
    }

    static contextType = AuthContext;

    findAllBookings = (userId) =>{

        let requestBody ={
            query: `query{
            bookings {
            _id,
            createdAt
            event{
            _id,
            title,
            price,
            date
            },
            user{
            email
            }
            }
            }`
        }

        fetch('http://localhost:8000/graphql',{
            method:'POST',
            body:JSON.stringify(requestBody),
            headers:{
                "Content-Type":'application/json',
                "Authorization": 'Bearer '+this.context.token
            }
        }).then(res=>res.json())
            .then(data=> {
                console.log(data.data.bookings)
                this.setState({
                    bookings:data.data.bookings
                })
            }).catch(err=>console.log(err))

    }

    componentDidMount() {
        this.findAllBookings(this.context.userId)
    }

    deleteBooking = (bookingId) =>{
        alert(bookingId);
    }


    render() {
        return (
            <div>
                {this.state.bookings.length>0 && this.state.bookings.map(booking=>(
                    <BookingItem deleteBooking={this.deleteBooking} booking={booking}/>
                ))}
            </div>
        );
    }
}

export default BookingsPage;
