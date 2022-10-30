import styled from 'styled-components';


const PresentationStyled = styled.div`
    width: 100%;
    padding-left: 45px;

    .shadow-top-presantation {
        position: absolute;
        width: 224.06px;
        height: 400px;
        left: 200px;
        top: 0px;
        background: linear-gradient(189.76deg, rgba(245, 144, 92, 0.35) 3.38%, rgba(251, 185, 98, 0.67) 15.25%, rgba(187, 147, 209, 0.27) 37.6%, rgba(0, 0, 0, 0) 67.79%);
        filter: blur(150px);
    }

    div.container-l-end {
        /* background: red; */
        width: 40%;
        .l-end {
            margin-top: 16vh;
        }
        h1 {
            font-family: 'Balgin Regular';
        }

        .retangle {
            border: 1px solid #525252;
            height: 51px;
            border-radius: 13px;
            margin: 10px 0;
        }

        button {
            width: 100%;
            height: 60px;
            background: linear-gradient(to right, #BB93D1, #FBB962);
            box-shadow: 0px 0px 14px rgba(187, 147, 209, 0.66), 0px 0px 14px rgba(251, 185, 98, 0.67);
            border-radius: 9px;
            border: none;
        }

        .container {
            width: 650px;
            height: 114px;
            background: linear-gradient(to top, #222, #BB93D1);
            border-radius: 17px;

            div {
                font-size: 22px;
                position: relative;
                top: 1px;
                left: 1px;
                width: 648px;
                height: 112px;
                background: #000;
                border-radius: 17px;
                text-align: center;
                padding: 20px;
            }
        }

        .container-l-end {
            width: 400px;
        }
    }
`;

export default PresentationStyled;