(function ($) {
    function formatAmount(value) {
        var amount = String(value || '').replace(/[^\d.]/g, '');
        if (!amount) return '25';
        return amount;
    }

    function updateDonationTotal($form) {
        var $input = $form.find('.js-amount-input');
        var $hidden = $form.find('.js-amount-value');
        var $custom = $form.find('.js-custom-amount');
        var amount = '25';

        if ($input.length) {
            amount = formatAmount($input.val() || $input.attr('placeholder'));
        } else if ($custom.is(':visible') && $custom.val()) {
            amount = formatAmount($custom.val());
            $hidden.val(amount);
        } else if ($hidden.length) {
            amount = formatAmount($hidden.val());
        }

        $form.find('.js-donation-total').text('Donation Total : $' + amount);
    }

    $(document).on('input', '.js-amount-input, .js-custom-amount', function () {
        updateDonationTotal($(this).closest('form'));
    });

    $(document).on('click', '.js-amount-picks a[data-amount]', function (e) {
        e.preventDefault();
        var $link = $(this);
        var $form = $link.closest('form');
        var amount = $link.data('amount');
        var $hidden = $form.find('.js-amount-value');
        var $custom = $form.find('.js-custom-amount');

        $link.addClass('is-active').siblings('a').removeClass('is-active');

        if (amount === 'custom') {
            $custom.removeAttr('hidden').trigger('focus');
            $hidden.val(formatAmount($custom.val() || ''));
        } else {
            $custom.attr('hidden', true);
            $hidden.val(String(amount));
        }

        updateDonationTotal($form);
    });

    $(document).on('submit', 'form.js-donation-form', function (e) {
        e.preventDefault();

        var $form = $(this);
        updateDonationTotal($form);

        var $fields = $form.find('.stay-connect-fields');
        var $success = $form.find('.stay-connect-success');
        var $error = $form.find('.stay-connect-alert--error');
        var $button = $form.find('[type="submit"]');
        var $label = $button.find('.btn-label');
        var $loading = $button.find('.btn-loading');

        $error.attr('hidden', true).empty();
        $button.addClass('is-loading').prop('disabled', true);
        $label.attr('hidden', true);
        $loading.removeAttr('hidden');

        $.ajax({
            url: $form.attr('action'),
            method: 'POST',
            data: new FormData(this),
            processData: false,
            contentType: false,
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .done(function (response) {
                if (response && response.success) {
                    $fields.attr('hidden', true);
                    $success.removeAttr('hidden');
                    $form.closest('.donation-inner-box, .inner-success').addClass('is-success');
                    $form[0].reset();
                    return;
                }

                showError('Something went wrong. Please try again.');
            })
            .fail(function (xhr) {
                var payload = xhr.responseJSON || {};
                var messages = [];

                if (payload.errors && payload.errors.length) {
                    messages = payload.errors;
                } else if (payload.error) {
                    messages = Object.values(payload.error);
                } else if (payload.message) {
                    messages = [payload.message];
                } else {
                    messages = ['Please fill in all required fields.'];
                }

                showError(messages.join('<br>'));
            })
            .always(function () {
                $button.removeClass('is-loading').prop('disabled', false);
                $label.removeAttr('hidden');
                $loading.attr('hidden', true);
            });

        function showError(html) {
            $error.html(html).removeAttr('hidden');
        }
    });

    $('.js-amount-form').each(function () {
        updateDonationTotal($(this));
    });

    $(document).on('click', '.popup-with-form', function () {
        var role = $(this).data('role') || '';
        var $form = $('#test-form form.js-donation-form');
        $form.find('.js-career-role').val(role);
        if (role) {
            var $match = $form.find('input[name="employment_status"][value="' + role + '"]');
            if ($match.length) {
                $match.prop('checked', true);
            }
        }
        $form.find('.stay-connect-success').attr('hidden', true);
        $form.find('.stay-connect-fields').removeAttr('hidden');
        $form.find('.stay-connect-alert--error').attr('hidden', true).empty();
    });

    function runLoadMore($btn, cardSelector, batch) {
        if ($btn.hasClass('is-loading')) {
            return;
        }

        $btn.addClass('is-loading');

        window.setTimeout(function () {
            var $hidden = $(cardSelector + '.is-hidden').slice(0, batch);
            $hidden.removeClass('is-hidden');
            $btn.removeClass('is-loading');
            if (!$(cardSelector + '.is-hidden').length) {
                var $wrap = $btn.closest('.load-btn, .wc-btn, .view-all-btn');
                if ($wrap.length) {
                    $wrap.hide();
                } else {
                    $btn.hide();
                }
            }
        }, 600);
    }

    $(document).on('click', '.js-load-more, .js-career-load-more, .js-blog-load-more, .js-prebuild-load-more, .js-inner-page-load-more, .js-portfolio-load-more', function (e) {
        e.preventDefault();
        var $btn = $(this);
        var cards = $btn.data('cards');
        var batch = parseInt($btn.data('batch'), 10) || 3;

        if (!cards) {
            if ($btn.hasClass('js-career-load-more')) cards = '.js-career-card';
            else if ($btn.hasClass('js-blog-load-more')) { cards = '.js-blog-card'; batch = batch || 2; }
            else if ($btn.hasClass('js-prebuild-load-more')) cards = '.js-prebuild-card';
            else if ($btn.hasClass('js-inner-page-load-more')) cards = '.js-inner-page-card';
            else if ($btn.hasClass('js-portfolio-load-more')) cards = '.js-portfolio-card';
        }

        if (!cards) {
            return;
        }

        runLoadMore($btn, cards, batch);
    });
})(jQuery);
