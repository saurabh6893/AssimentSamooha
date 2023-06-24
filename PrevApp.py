# import streamlit as st


# def main():
#     # Set the background color
#     page_bg_color = """
#     <style>
#     body {
#         background-color: #f0f0f0;
#         display: flex;
#         flex-direction: column;
#         justify-content: center;
#         align-items: center;
#         height: 100vh;
#     }
#     </style>
#     """
#     st.markdown(page_bg_color, unsafe_allow_html=True)

    


#     st.markdown("<div class='container'><img src='/home/saurabh/Documents/Development/streamlit/signup-form/src/icons8-wind-48.png' width='50'><h1 style='margin: 0'>Samooha</h1></div>", unsafe_allow_html=True)

#     st.markdown("#### Signup using Snowflake account")


#     # React Component
#     st.components.v1.iframe("http://localhost:5173", height=600, width=1000)

#     # Session state variable to control Signup button focus
#     is_button_focused = st.session_state.get("is_button_focused", False)

#     # Listen for custom event from React component
#     signup_event = st.session_state.get("signup_event", {})
#     if "args" in signup_event and "detail" in signup_event["args"]:
#         is_button_focused = signup_event["args"]["detail"]

#     if is_button_focused:
#         st.markdown('<style>.focused-button { background-color: blue; color: white; }</style>', unsafe_allow_html=True)

#     # TOS and Privacy Policy
#     st.text("By signing up to TOI and agreeing to the Privacy Policy.")
#     st.markdown("[Privacy Policy](https://samooha.tech)")

#     # Store the updated state in session state
#     st.session_state.is_button_focused = is_button_focused

#     # Streamlit Component End


# if __name__ == "__main__":
#     main()
