import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    
    cardContainer:{

        padding: 10,
        margin: 20,
        minHeight: 100,
        backgroundColor: "#afeeee",
        borderRadius: 20,
        
        marginLeft: 20,
        marginRight: 20,
        
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        elevation: 9, 

    },
    
    cardTitle:{
        textAlign: "center",
        fontSize: 20,
        borderBottomColor: '#000',
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 1
    },
    

    cardBody:{
        fontSize:15,
        textAlign: "justify",
    }

})