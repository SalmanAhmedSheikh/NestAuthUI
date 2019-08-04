import React from 'react';
import axios from 'axios';

export default class Dashboard extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            user: null,
            username: '',
            userimage: '',
            imagefile: '',
            uploadError: ''


        }
        this.handleFile = this.handleFile.bind(this);
        this.handleUpload = this.handleUpload.bind(this);



    }
    handleFile(e) {
        console.log("In handle file");

        let file = e.target.files[0];
        this.setState({
            imagefile: file,
            uploadError: ""
        });
    }



    handleUpload(e) {

        if (this.Validate()) {
            // console.log('In Component did Mount');
            const jwt = localStorage.getItem('cool-jwt');


            console.log('In Handle Upload');
            var formData = new FormData();
            var imagefile = this.state.imagefile;

            console.log('imageFile', imagefile);
            formData.append("file", imagefile);
            formData.append("name", this.state.username);

            console.log('formData', formData);
            axios.post('http://localhost:5000/auth/upload', formData, {
                headers: {
                    "content-type": "multipart/form-data;"
                    //     'Content-Type': ''
                    , authorization: `bearer ${jwt}`
                }
            }).then(
                (res) => {
                    console.log('Response of upload image', res);


                    this.setState({ userimage: '' });
                    this.setState({ userimage: "http://localhost:5000/auth/getProfilePic/" + this.state.username, });

                    var FileUploader = document.getElementById("fileUploader");
                    FileUploader.value = '';


                }
            ).catch(e => console.log('ERROR in file uploading', e));

        }

    }
    Validate = () => {

        if (this.state.imagefile == '') {
            this.setState({
                uploadError: "Please select photo"

            });
            return false;
        }
        var fileName = this.state.imagefile.name,
            idxDot = fileName.lastIndexOf(".") + 1,
            extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile == "jpg" || extFile == "jpeg") {
            return true;
        } else {
            this.setState({
                uploadError: "Please select photo in jpeg/jpeg format"

            });
            return false;
        }

    }

    componentDidMount() {

        // console.log('In Component did Mount');
        const jwt = localStorage.getItem('cool-jwt');

        // console.log('jwt is here',jwt);

        if (!jwt) {
            console.log('I am in !jwt');
            this.props.history.push('/login');

        }
        else {
            console.log('In else ');
            axios.post('http://localhost:5000/auth/getUser', {}, { headers: { 'authorization': `bearer ${jwt}` } })
                .then(
                    (res) => {
                        console.log('before res.data', res.data);
                        this.setState({ user: res.data });
                        console.log('After res.data', res.data);

                        this.setState({ username: this.state.user.username });

                        this.setState({ userimage: "http://localhost:5000/auth/getProfilePic/" + this.state.username, });



                    })
                .catch((err) => {
                    console.log('err', err);
                    localStorage.removeItem('cool-jwt');
                    this.props.history.push('/login');
                });
        }
    }


    render() {


        console.log("In render() state is ", this.state);
        console.log('Prop ', this.props);


        return (<div>


            <img src={this.state.userimage} ></img>

            <p>In a Dashboard {this.props.myuser} </p>
            <p>User is {this.state.username} </p>

            <div style={{ fontSize: "12", color: "red" }}>{this.state.uploadError}</div>

            <input name="file" id="fileUploader" onChange={e => this.handleFile(e)} type="file" accept="image/jpg" ></input>

            <button type="button" onClick={e => this.handleUpload(e)} ></button>


        </div>)

    }



}

