import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, CheckCircle2, AlertCircle, Calendar, Users, Phone, User, Copy, Check } from 'lucide-react';
import { SAMPLE_TREKS } from '../../data/treks';
import { Trek } from '../../types';
import { createDetailedEnquiryUrl, TrekEnquiryPayload } from '../../utils/whatsapp';
import { BRAND_CONFIG } from '../../config/brand';

interface BookingEnquirySectionProps {
  preselectedTrek?: Trek | null;
}

export const BookingEnquirySection: React.FC<BookingEnquirySectionProps> = ({ preselectedTrek }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedTrekId, setSelectedTrekId] = useState<string>(preselectedTrek?.id || '');
  const [pickupCity, setPickupCity] = useState<'Pune' | 'Mumbai' | 'Self'>('Pune');
  const [preferredDate, setPreferredDate] = useState('');
  const [participants, setParticipants] = useState('1');
  const [experienceLevel, setExperienceLevel] = useState('First-Time Trekker');
  const [questions, setQuestions] = useState('');

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Sync if opened with a preselected trek
  useEffect(() => {
    if (preselectedTrek) {
      setSelectedTrekId(preselectedTrek.id);
      if (preselectedTrek.scheduledDates.length > 0) {
        setPreferredDate(preselectedTrek.scheduledDates[0]);
      }
    }
  }, [preselectedTrek]);

  const selectedTrek = SAMPLE_TREKS.find((t) => t.id === selectedTrekId);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{10,14}$/.test(phoneNumber.trim())) {
      errors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!selectedTrekId) errors.selectedTrekId = 'Please select a trek circuit';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const payload: TrekEnquiryPayload = {
      trekName: selectedTrek?.title || 'General Enquiry',
      region: selectedTrek?.destination,
      userName: fullName.trim(),
      phone: phoneNumber.trim(),
      preferredCity: pickupCity,
      date: preferredDate || 'Upcoming Weekend',
      participants: participants,
      experience: experienceLevel,
      questions: questions.trim() || undefined,
    };

    const waUrl = createDetailedEnquiryUrl(payload);
    setSubmittedUrl(waUrl);

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    if (!submittedUrl) return;
    const urlObj = new URL(submittedUrl);
    const text = urlObj.searchParams.get('text') || '';
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  return (
    <section id="enquiry" className="py-20 bg-[#0a110e] border-t border-emerald-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)] mb-2">
            PLAN YOUR NEXT TRAIL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[family-name:var(--font-display)]">
            Trek Booking Enquiry
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Submit your details below to generate an official WhatsApp enquiry. Our coordinator will reply with departure timings, packing guide, and seat availability.
          </p>
        </div>

        <div className="bg-[#0e1713] rounded-2xl border border-emerald-950 p-6 sm:p-10 shadow-2xl">
          {submittedUrl ? (
            /* Success / Feedback state */
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-600/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-display)]">
                  WhatsApp Message Generated!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been prepared. If WhatsApp didn't open automatically, click the button below to send your details directly to our Pune coordinator.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={submittedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-lg transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Open in WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-200 hover:text-white bg-[#14231a] border border-emerald-900 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedMessage ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedMessage ? 'Copied to Clipboard' : 'Copy Message Text'}</span>
                </button>
              </div>

              <div className="pt-4 border-t border-emerald-950/60 max-w-sm mx-auto text-xs text-slate-400">
                <p>
                  * Important: This is a demonstration booking enquiry. No credit card or instant charge is applied.
                </p>
                <button
                  onClick={() => setSubmittedUrl(null)}
                  className="text-amber-400 hover:underline mt-2 text-xs font-medium cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </div>
            </div>
          ) : (
            /* Form input state */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-[family-name:var(--font-mono)]">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Patil"
                      className={`w-full pl-10 pr-3.5 py-2.5 text-xs bg-[#080d0a] border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors ${
                        formErrors.fullName ? 'border-rose-500' : 'border-emerald-950'
                      }`}
                    />
                  </div>
                  {formErrors.fullName && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-[family-name:var(--font-mono)]">
                    Mobile / WhatsApp Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 9823012345"
                      className={`w-full pl-10 pr-3.5 py-2.5 text-xs bg-[#080d0a] border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors ${
                        formErrors.phoneNumber ? 'border-rose-500' : 'border-emerald-950'
                      }`}
                    />
                  </div>
                  {formErrors.phoneNumber && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Trek Circuit Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-[family-name:var(--font-mono)]">
                    Selected Trek Circuit <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={selectedTrekId}
                    onChange={(e) => setSelectedTrekId(e.target.value)}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#080d0a] border rounded-lg text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer ${
                      formErrors.selectedTrekId ? 'border-rose-500' : 'border-emerald-950'
                    }`}
                  >
                    <option value="">-- Choose a Trek --</option>
                    {SAMPLE_TREKS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} (₹{t.priceInr})
                      </option>
                    ))}
                  </select>
                  {formErrors.selectedTrekId && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.selectedTrekId}
                    </span>
                  )}
                </div>

                {/* Pick-up City Hub */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-[family-name:var(--font-mono)]">
                    Boarding / Pick-up Hub
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Pune', 'Mumbai', 'Self'] as const).map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setPickupCity(city)}
                        className={`py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                          pickupCity === city
                            ? 'bg-amber-500 text-black font-semibold border-amber-400'
                            : 'bg-[#080d0a] text-slate-300 border-emerald-950 hover:border-slate-700'
                        }`}
                      >
                        {city === 'Self' ? 'Base Village' : city}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-[family-name:var(--font-mono)]">
                    Preferred Weekend
                  </label>
                  <input
                    type="text"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="e.g. Next Saturday"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#080d0a] border border-emerald-950 rounded-lg text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Number of Trekkers */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-[family-name:var(--font-mono)]">
                    Trekkers Count
                  </label>
                  <select
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#080d0a] border border-emerald-950 rounded-lg text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="1">1 (Solo Trekker)</option>
                    <option value="2">2 (Duo)</option>
                    <option value="3-5">3–5 (Small Group)</option>
                    <option value="6+">6+ (College / Office Tribe)</option>
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-[family-name:var(--font-mono)]">
                    Prior Experience
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#080d0a] border border-emerald-950 rounded-lg text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="First-Time Trekker">First-Time Trekker</option>
                    <option value="Beginner (1–2 hikes)">Beginner (1–2 hikes)</option>
                    <option value="Regular Sahyadri Trekker">Regular Sahyadri Trekker</option>
                    <option value="Himalayan Experienced">Himalayan Experienced</option>
                  </select>
                </div>
              </div>

              {/* Additional Questions / Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 font-[family-name:var(--font-mono)]">
                  Questions / Dietary Needs (Optional)
                </label>
                <textarea
                  rows={2}
                  value={questions}
                  onChange={(e) => setQuestions(e.target.value)}
                  placeholder="e.g. Any specific food preferences, tent-sharing requests, or footwear questions?"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#080d0a] border border-emerald-950 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              {/* Transparency Notice */}
              <div className="p-3 bg-[#080d0a] rounded-lg border border-emerald-950/80 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">How this works:</span> Submitting this form creates a formatted enquiry message and opens your official WhatsApp chat with Trail Tribe India. No payment is taken online.
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-lg transition-all shadow-lg hover:shadow-amber-500/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Enquire via Official WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
