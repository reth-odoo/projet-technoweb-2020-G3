$(document).ready(function() {


    $.each($(".tag-input"), function(ind, tag_input) {
        var tag_content = $(tag_input).children(".field")

        var list = $(tag_content).children("ul")

        var list_items = $(list).children("li")
        var input_field = $(list).children("input")


        //append to this tag-input
        function add_tag_from_input() {
            /*
             @returns true if added, false otherwide
            */
            //get value
            value = $(input_field).val().trim()
            if (value === "") {
                return false
            }
            //reset field
            $(input_field).val("")
                //append tag
            $(list).append(`<li>${value} <button><i class='fa fa-times'></i></button></li>`)
            return true
        }


        $(input_field).on("keypress", function(e) {
            if (e.which == 13) {
                //try to add, update if necessary
                if (add_tag_from_input())
                    update_event_handlers()
            }
        });


        function update_event_handlers() {
            //update li list
            list_items = $(list).children("li")
                //add click handler to delete
            $.each(list_items, function(ind_update_event, list_item) {
                $(list_item).children("button").on("click", function() {
                    $(list_item).remove()
                });
            });
        }
    });
});