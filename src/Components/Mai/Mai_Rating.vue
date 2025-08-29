<template>
    
 <section class="ratings-section py-5">
    <div class="container">
        <!-- Section Header -->
        <div class="row mb-5">
            <div class="col-12 text-center">
                <h2 class="section-title mb-3">Our Guest Reviews</h2>
                <p class="section-subtitle">Trusted by travelers worldwide</p>
                <div class="divider mx-auto mb-4"></div>
            </div>
        </div>

        <!-- Ratings Grid -->
        <div class="row justify-content-center align-items-center g-4">
            
            <!-- Booking.com Rating -->
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="rating-card" data-rating="9.0">
                    <div class="star-container">
                        <div class="star-icon">
                            <svg viewBox="0 0 24 24" class="star-svg">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <div class="rating-pulse"></div>
                    </div>
                    
                    <div class="rating-content">
                        <div class="rating-score">9.0</div>
                        <div class="platform-name">Booking</div>
                        <div class="rating-label">Exceptional</div>
                    </div>
                </div>
            </div>

            <!-- Hostelworld.com Rating -->
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="rating-card" data-rating="8.5">
                    <div class="star-container">
                        <div class="star-icon">
                            <svg viewBox="0 0 24 24" class="star-svg">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <div class="rating-pulse"></div>
                    </div>
                    
                    <div class="rating-content">
                        <div class="rating-score">8.5</div>
                        <div class="platform-name">Hostelworld</div>
                        <div class="rating-label">Very Good</div>
                    </div>
                </div>
            </div>

            <!-- Agoda.com Rating -->
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="rating-card" data-rating="9.0">
                    <div class="star-container">
                        <div class="star-icon">
                            <svg viewBox="0 0 24 24" class="star-svg">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <div class="rating-pulse"></div>
                    </div>
                    
                    <div class="rating-content">
                        <div class="rating-score">9.0</div>
                        <div class="platform-name">Agoda</div>
                        <div class="rating-label">Exceptional</div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Additional Reviews Summary -->
        <div class="row mt-5">
            <div class="col-12 text-center">
                <div class="reviews-summary">
                    <p class="summary-text">Based on <strong>500+ verified reviews</strong> from our guests</p>
                    <div class="review-highlights">
                        <span class="highlight-item">🏖️ Perfect Location</span>
                        <span class="highlight-item">🏠 Clean & Comfortable</span>
                        <span class="highlight-item">👥 Friendly Staff</span>
                        <span class="highlight-item">🌅 Amazing Views</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row p-5 mt-5 "  style="border-radius: 10px;">
        <div class="col-sm-4 col-lg-4 col-md-4 mt-2">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p1.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4 mt-2">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p2.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4 mt-2">
            <div class="image-card-mai-room">
                <img src="../../assets/Logo/p3.jpg" alt="Mai Place" class="img-fluid mai-rooms" />
            </div>
        </div>
    </div>
</section>
</template>
<style scoped>

/* Section Styling */
.ratings-section {
    background-color: #EAEDF2;
    min-height: 80vh;
    position: relative;
}

.section-title {
    font-family: 'Julius Sans One', sans-serif;
    font-size: 2.5rem;
    color: #333;
    letter-spacing: 1px;
    font-weight: 400;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #666;
    font-weight: 400;
}

.divider {
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #A67D77, #e69000);
    border: none;
}

/* Rating Card Styling */
.rating-card {
    background: white;
    border-radius: 20px;
    padding: 2.5rem 1.5rem;
    text-align: center;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease forwards;
}

.rating-card:nth-child(1) { animation-delay: 0.2s; }
.rating-card:nth-child(2) { animation-delay: 0.4s; }
.rating-card:nth-child(3) { animation-delay: 0.6s; }

.rating-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s;
}

.rating-card:hover::before {
    left: 100%;
}

.rating-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

/* Star Container */
.star-container {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.star-icon {
    width: 60px;
    height: 60px;
    position: relative;
    z-index: 2;
}

.star-svg {
    width: 100%;
    height: 100%;
    fill: #A67D77;
    stroke: #A67D77;
    stroke-width: 1;
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(166, 125, 119, 0.3));
}

.rating-card:hover .star-svg {
    fill: #e69000;
    stroke: #e69000;
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 6px 12px rgba(230, 144, 0, 0.4));
}

.rating-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border: 2px solid #A67D77;
    border-radius: 50%;
    opacity: 0;
    z-index: 1;
}

.rating-card:hover .rating-pulse {
    animation: pulse 2s infinite;
}

/* Rating Content */
.rating-score {
    font-size: 3rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
    font-family: 'Julius Sans One', sans-serif;
    letter-spacing: 1px;
}

.platform-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #A67D77;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.3rem;
    font-family: 'Marcellus SC', serif;
}

.rating-label {
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
}

/* Reviews Summary */
.reviews-summary {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    margin-top: 2rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.summary-text {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 1.5rem;
}

.review-highlights {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.highlight-item {
    background: linear-gradient(135deg, #A67D77, #e69000);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 600;
    display: inline-block;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(166, 125, 119, 0.3);
}

.highlight-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(166, 125, 119, 0.4);
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
    50% {
        opacity: 0.6;
        transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1.5);
    }
}

</style>