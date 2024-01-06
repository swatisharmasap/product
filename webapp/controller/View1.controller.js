sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("sap.com.product.controller.View1", {
      onInit: function () {
        var oJSONDATA = {
          ProductDetails: [
            {
              ProductID: 1,
              ProductName: "Chai",
              SupplierID: 1,
              CategoryID: 1,
              QuantityPerUnit: "10 boxes x 20 bags",
              UnitPrice: "18.0000",
              UnitsInStock: 39,
              UnitsOnOrder: 0,
              ReorderLevel: 10,
              Discontinued: false,
            },
            {
              ProductID: 2,
              ProductName: "Chang",
              SupplierID: 1,
              CategoryID: 1,
              QuantityPerUnit: "24 - 12 oz bottles",
              UnitPrice: "19.0000",
              UnitsInStock: 17,
              UnitsOnOrder: 40,
              ReorderLevel: 25,
              Discontinued: false,
            },
            {
              ProductID: 3,
              ProductName: "Aniseed Syrup",
              SupplierID: 1,
              CategoryID: 2,
              QuantityPerUnit: "12 - 550 ml bottles",
              UnitPrice: "10.0000",
              UnitsInStock: 13,
              UnitsOnOrder: 70,
              ReorderLevel: 25,
              Discontinued: false,
            },
            {
              ProductID: 4,
              ProductName: "Chef Anton's Cajun Seasoning",
              SupplierID: 2,
              CategoryID: 2,
              QuantityPerUnit: "48 - 6 oz jars",
              UnitPrice: "22.0000",
              UnitsInStock: 53,
              UnitsOnOrder: 0,
              ReorderLevel: 0,
              Discontinued: false,
            },
            {
              ProductID: 5,
              ProductName: "Chef Anton's Gumbo Mix",
              SupplierID: 2,
              CategoryID: 2,
              QuantityPerUnit: "36 boxes",
              UnitPrice: "21.3500",
              UnitsInStock: 0,
              UnitsOnOrder: 0,
              ReorderLevel: 0,
              Discontinued: true,
            },
          ],
        };
        var oProductJSONModel = new sap.ui.model.json.JSONModel(oJSONDATA);
        this.getView().setModel(oProductJSONModel, "oProductJSONModel");
      },
      onRowPress:function(oEvent){
    
        var oSelectedObject = oEvent.getSource().getBindingContext("oProductJSONModel").getObject();
        // console.log(oSelectedObject);
        // this.getView().byId("ProductID").setValue(oSelectedObject.ProductID);
        // this.getView().byId("ProductName").setValue(oSelectedObject.ProductName);
        // this.getView().byId("SupplierID").setValue(oSelectedObject.SupplierID);
        // this.getView().byId("CategoryID").setValue(oSelectedObject.CategoryID);
        // this.getView().byId("QuantityPerUnit").setValue(oSelectedObject.QuantityPerUnit);
        // this.getView().byId("UnitPrice").setValue(oSelectedObject.UnitPrice);
        // this.getView().byId("UnitsInStock").setValue(oSelectedObject.UnitsInStock);
        // this.getView().byId("ReorderLevel").setValue(oSelectedObject.ReorderLevel);
        // this.getView().byId("Discontinued").setValue(oSelectedObject.Discontinued)

        var oRouter =  this.getOwnerComponent().getRouter();

        oRouter.navTo("RouteView2",{
            v1:oSelectedObject.ProductID,
            v2: oSelectedObject.ProductName,
            v3: oSelectedObject.SupplierID,
            v4: oSelectedObject.CategoryID
        })
      },
        UnitPriceLogic:function(sValue){
        debugger
          if(sValue>"15.0000"){
              return "Success"
  
          }else{
              return "Error";
          }
        },
        onSearch:function(){

          var ProductID = this.getView().byId("ProductID").getValue();
          var oTableBinding = this.getView().byId("ProductTable").getBinding("items");
          var oMyFilter = new sap.ui.model.Filter("ProductID",sap.ui.model.FilterOperator.EQ,ProductID)
          if(ProductID){
              oTableBinding.filter(oMyFilter);
          }else{
              oTableBinding.filter([]);
          }
               
}


      },)
    });
  
