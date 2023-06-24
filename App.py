import streamlit as st


def main():
    # Set the background color
    page_bg_color = """
    <style>
    
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transform: translate(20%,0)
    }

    .containerx{
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translate(20%,0)
    }

    </style>
    """
    st.markdown(page_bg_color, unsafe_allow_html=True)

    


    st.markdown("<div class='container'><h1 style='margin: 0'>Samooha</h1></div>", unsafe_allow_html=True)

    st.markdown("<div class='containerx'><h2> Signup using Snowflake account</h2></div>", unsafe_allow_html=True)

   


    # React Component
    st.components.v1.iframe("http://localhost:5173", height=600, width=1000)


    # Session state variable to control Signup button focus
    is_button_focused = st.session_state.get("is_button_focused", False)

   

if __name__ == "__main__":
    main()
