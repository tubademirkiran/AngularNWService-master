using AngularNW.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularNW.Models.Model
{
    public class ProductModel
    {
        public List<Products> products { get; set; }
        public List<CategoriesSelect> clist { get; set; }
        public List<SupplierSelect> slist { get; set; }


    }
}