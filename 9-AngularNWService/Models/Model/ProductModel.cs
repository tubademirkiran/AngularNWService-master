using _9_AngularNWService.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _9_AngularNWService.Models.Model
{
    public class ProductModel
    {
        public List<Products> productList { get; set; }
        public List<CategoriesSelect> clist { get; set; }
        public List<SupplierSelect> slist { get; set; }


    }
}