<?php


class SM_TestTwo_TestController extends Mage_Core_Controller_Front_Action
{
    public function indexAction()
    {
        $coll = Mage::getResourceModel('catalog/product_attribute_collection')
            ->addFieldToFilter('is_filterable', true)
            ->addFieldToFilter('frontend_label', 'Color');
        foreach ($coll as $item) {
            echo "<pre>";
            print_r($item);
            echo "</pre>";
            echo $item->getName();
            echo $item->getId();
            echo $item->getFilters();
        }
    }
}