sap.ui.define(
    ["sap/ui/core/mvc/Controller","sap/m/MessageBox"],
    
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
      "use strict";
  
      return Controller.extend("sap.com.product.controller.View2", {
        onInit: function () {
          
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.getRoute("RouteView2").attachPatternMatched(this.onObjectMatched, this);
        },
        onObjectMatched:function(oEvent){
          debugger
        var value1 = oEvent.getParameter("arguments").v1
        var value2 = oEvent.getParameter("arguments").v2
        var value3 = oEvent.getParameter("arguments").v3
        var value4 = oEvent.getParameter("arguments").v4
        
         this.getView().byId("ProductID").setValue(value1);
         this.getView().byId("ProductName").setValue(value2);
         this.getView().byId("SupplierID").setValue(value3);
         this.getView().byId("CategoryID").setValue(value4);


      },
      onLiveChangeProductID:function(){
       
        this.getView().byId("ProductID").setValueState("Success")
        // this.getView().byId("ProductName").setValueState("Success")
        // this.getView().byId("SuplierID").setValueState("Success")
        // this.getView().byId("CategoryID").setValueState("Success")
        // this.getView().byId("QuantityPerUnit").setValueState("Success")
        // this.getView().byId("UnitPrice").setValueState("Success")
        // this.getView().byId("UnitsInStock").setValueState("Success")
        // this.getView().byId("UnitsOnOrder").setValueState("Success")
        // this.getView().byId("ReorderLevel").setValueState("Success")
        // this.getView().byId("Discontinued").setValueState("Success")


      },
      onSave: function(){
        var ProductID = this.getView().byId("ProductID").getValue();
      //  var ProductName= this.getView().byId("ProductName").getvalue();
      //   var SupplierID= this.getView().byId("SuplierID").getvalue();
      //   var CategoryID= this.getView().byId("CategoryID").getValue();
      //   var QuantityPerUnit= this.getView().byId("QuantityPerUnit").getValue();
      //   var UnitPrice=this.getView().byId("UnitPrice").getValue();
      //   var UnitInStock=this.getView().byId("UnitsInStock").getValue();
      //   var UnitsOnOrder=this.getView().byId("UnitsOnOrder").getValue();
      //   var ReorderLevel= this.getView().byId("ReorderLevel").getValue();
      //   var Discontinued=this.getView().byId("Discontinued").getValue();

        if(ProductID==""){

          MessageBox.error("Please enter ProductID")
          this.getView().byId("ProductID").setValueState("Error")
          this.getView().byId("ProducID").setValueStateText("Product ID is required")
          return
        }

      }
      });
    }
  );
  
  